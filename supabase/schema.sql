-- ============================================================
-- FouDeBusinessWorld — Supabase Database Schema
-- Version: 1.0.0
-- Date: 2026-03-15
-- ============================================================
-- Ce script est idempotent : il utilise IF NOT EXISTS partout
-- pour éviter les breaking changes sur une base existante.
-- ============================================================

-- ----------------------------------------
-- 1. TYPES ENUM
-- ----------------------------------------

DO $$ BEGIN
  CREATE TYPE lead_status AS ENUM ('new', 'contacted', 'qualified', 'converted', 'lost');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE appointment_status AS ENUM ('scheduled', 'completed', 'cancelled', 'no_show');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE message_status AS ENUM ('new', 'read', 'replied');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- ----------------------------------------
-- 2. EXTENSION uuid-ossp (si pas déjà)
-- ----------------------------------------

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ----------------------------------------
-- 3. TABLE leads
-- ----------------------------------------

CREATE TABLE IF NOT EXISTS leads (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email            TEXT NOT NULL,
  first_name       TEXT,
  last_name        TEXT,
  phone            TEXT,
  company          TEXT,
  source           TEXT,
  service_interest TEXT[] DEFAULT '{}',
  status           lead_status NOT NULL DEFAULT 'new',
  notes            TEXT,
  calendly_event_id TEXT,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index unique sur email (idempotent)
CREATE UNIQUE INDEX IF NOT EXISTS leads_email_unique ON leads (email);

-- Index pour recherche par status
CREATE INDEX IF NOT EXISTS leads_status_idx ON leads (status);

-- Index pour recherche par date
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);

-- ----------------------------------------
-- 4. TABLE newsletter_subscriptions
-- ----------------------------------------

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email           TEXT NOT NULL,
  first_name      TEXT,
  subscribed      BOOLEAN NOT NULL DEFAULT true,
  subscribed_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  unsubscribed_at TIMESTAMPTZ,
  source          TEXT
);

CREATE UNIQUE INDEX IF NOT EXISTS newsletter_email_unique ON newsletter_subscriptions (email);

-- ----------------------------------------
-- 5. TABLE appointments
-- ----------------------------------------

CREATE TABLE IF NOT EXISTS appointments (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id           UUID REFERENCES leads(id) ON DELETE SET NULL,
  calendly_event_id TEXT,
  scheduled_at      TIMESTAMPTZ NOT NULL,
  status            appointment_status NOT NULL DEFAULT 'scheduled',
  notes             TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS appointments_lead_id_idx ON appointments (lead_id);
CREATE INDEX IF NOT EXISTS appointments_scheduled_at_idx ON appointments (scheduled_at DESC);
CREATE INDEX IF NOT EXISTS appointments_status_idx ON appointments (status);

-- ----------------------------------------
-- 6. TABLE contact_messages
-- ----------------------------------------

CREATE TABLE IF NOT EXISTS contact_messages (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name       TEXT NOT NULL,
  email      TEXT NOT NULL,
  subject    TEXT,
  message    TEXT NOT NULL,
  status     message_status NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS contact_messages_status_idx ON contact_messages (status);
CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx ON contact_messages (created_at DESC);

-- ----------------------------------------
-- 7. TRIGGER updated_at automatique
-- ----------------------------------------

CREATE OR REPLACE FUNCTION trigger_set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Appliquer sur leads
DROP TRIGGER IF EXISTS set_leads_updated_at ON leads;
CREATE TRIGGER set_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION trigger_set_updated_at();

-- ----------------------------------------
-- 8. ENABLE RLS sur toutes les tables
-- ----------------------------------------

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
