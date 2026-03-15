-- ============================================================
-- FouDeBusinessWorld — Row Level Security Policies
-- Version: 1.0.0
-- Date: 2026-03-15
-- ============================================================
-- Principe :
--   - anon (visiteurs) : INSERT uniquement sur leads, newsletter, contact
--   - authenticated (admin) : SELECT, UPDATE, DELETE sur tout
-- ============================================================

-- ----------------------------------------
-- HELPERS : Drop policies si elles existent déjà
-- (Supabase n'a pas IF NOT EXISTS pour policies)
-- On utilise DO block pour éviter les erreurs
-- ----------------------------------------

-- ========================================
-- LEADS
-- ========================================

-- Visiteurs : peuvent soumettre un lead
DROP POLICY IF EXISTS "leads_insert_anon" ON leads;
CREATE POLICY "leads_insert_anon" ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Visiteurs : peuvent aussi soumettre en étant authenticated (formulaire côté client connecté)
DROP POLICY IF EXISTS "leads_insert_authenticated" ON leads;
CREATE POLICY "leads_insert_authenticated" ON leads
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Admin : lecture complète
DROP POLICY IF EXISTS "leads_select_authenticated" ON leads;
CREATE POLICY "leads_select_authenticated" ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Admin : mise à jour
DROP POLICY IF EXISTS "leads_update_authenticated" ON leads;
CREATE POLICY "leads_update_authenticated" ON leads
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Admin : suppression
DROP POLICY IF EXISTS "leads_delete_authenticated" ON leads;
CREATE POLICY "leads_delete_authenticated" ON leads
  FOR DELETE
  TO authenticated
  USING (true);

-- ========================================
-- NEWSLETTER SUBSCRIPTIONS
-- ========================================

-- Visiteurs : peuvent s'inscrire
DROP POLICY IF EXISTS "newsletter_insert_anon" ON newsletter_subscriptions;
CREATE POLICY "newsletter_insert_anon" ON newsletter_subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (true);

DROP POLICY IF EXISTS "newsletter_insert_authenticated" ON newsletter_subscriptions;
CREATE POLICY "newsletter_insert_authenticated" ON newsletter_subscriptions
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Admin : lecture
DROP POLICY IF EXISTS "newsletter_select_authenticated" ON newsletter_subscriptions;
CREATE POLICY "newsletter_select_authenticated" ON newsletter_subscriptions
  FOR SELECT
  TO authenticated
  USING (true);

-- Admin : mise à jour (ex: désabonnement côté admin)
DROP POLICY IF EXISTS "newsletter_update_authenticated" ON newsletter_subscriptions;
CREATE POLICY "newsletter_update_authenticated" ON newsletter_subscriptions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Admin : suppression
DROP POLICY IF EXISTS "newsletter_delete_authenticated" ON newsletter_subscriptions;
CREATE POLICY "newsletter_delete_authenticated" ON newsletter_subscriptions
  FOR DELETE
  TO authenticated
  USING (true);

-- ========================================
-- APPOINTMENTS
-- ========================================

-- Pas d'insertion publique pour appointments
-- (créés via webhook Calendly ou admin)

-- Admin : CRUD complet
DROP POLICY IF EXISTS "appointments_select_authenticated" ON appointments;
CREATE POLICY "appointments_select_authenticated" ON appointments
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "appointments_insert_authenticated" ON appointments;
CREATE POLICY "appointments_insert_authenticated" ON appointments
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "appointments_update_authenticated" ON appointments;
CREATE POLICY "appointments_update_authenticated" ON appointments
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "appointments_delete_authenticated" ON appointments;
CREATE POLICY "appointments_delete_authenticated" ON appointments
  FOR DELETE
  TO authenticated
  USING (true);

-- Service role (pour webhooks/edge functions) : insertion
-- Note : le service_role bypass RLS par défaut dans Supabase
-- Pas besoin de policy spécifique

-- ========================================
-- CONTACT MESSAGES
-- ========================================

-- Visiteurs : peuvent envoyer un message
DROP POLICY IF EXISTS "contact_insert_anon" ON contact_messages;
CREATE POLICY "contact_insert_anon" ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

DROP POLICY IF EXISTS "contact_insert_authenticated" ON contact_messages;
CREATE POLICY "contact_insert_authenticated" ON contact_messages
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Admin : lecture
DROP POLICY IF EXISTS "contact_select_authenticated" ON contact_messages;
CREATE POLICY "contact_select_authenticated" ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Admin : mise à jour (marquer comme lu/répondu)
DROP POLICY IF EXISTS "contact_update_authenticated" ON contact_messages;
CREATE POLICY "contact_update_authenticated" ON contact_messages
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Admin : suppression
DROP POLICY IF EXISTS "contact_delete_authenticated" ON contact_messages;
CREATE POLICY "contact_delete_authenticated" ON contact_messages
  FOR DELETE
  TO authenticated
  USING (true);
