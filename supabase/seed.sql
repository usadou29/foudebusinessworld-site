-- ============================================================
-- FouDeBusinessWorld — Seed Data (Test)
-- ============================================================
-- À exécuter uniquement en environnement de développement.
-- Utilise ON CONFLICT pour être réexécutable sans erreur.
-- ============================================================

-- ----------------------------------------
-- LEADS
-- ----------------------------------------

INSERT INTO leads (email, first_name, last_name, phone, company, source, service_interest, status, notes)
VALUES
  ('jean.dupont@example.com', 'Jean', 'Dupont', '+33612345678', 'Dupont SARL', 'homepage', ARRAY['consulting', 'formation'], 'new', 'Intéressé par un accompagnement stratégique'),
  ('marie.martin@example.com', 'Marie', 'Martin', '+33698765432', 'Martin & Co', 'services', ARRAY['coaching'], 'contacted', 'Premier appel effectué'),
  ('pierre.durand@example.com', 'Pierre', 'Durand', NULL, NULL, 'blog', ARRAY['consulting', 'coaching', 'formation'], 'qualified', 'Très motivé, budget validé'),
  ('sophie.leroy@example.com', 'Sophie', 'Leroy', '+33611223344', 'Leroy Digital', 'landing-page-offre', ARRAY['formation'], 'converted', 'Client signé en janvier'),
  ('lucas.moreau@example.com', 'Lucas', 'Moreau', NULL, NULL, 'homepage', ARRAY['consulting'], 'lost', 'Pas de budget cette année')
ON CONFLICT (email) DO NOTHING;

-- ----------------------------------------
-- NEWSLETTER SUBSCRIPTIONS
-- ----------------------------------------

INSERT INTO newsletter_subscriptions (email, first_name, subscribed, source)
VALUES
  ('jean.dupont@example.com', 'Jean', true, 'homepage'),
  ('marie.martin@example.com', 'Marie', true, 'blog'),
  ('alex.bernard@example.com', 'Alex', true, 'footer'),
  ('julie.petit@example.com', 'Julie', false, 'homepage'),
  ('thomas.robert@example.com', 'Thomas', true, 'landing-page')
ON CONFLICT (email) DO NOTHING;

-- Marquer Julie comme désabonnée
UPDATE newsletter_subscriptions
SET unsubscribed_at = now() - INTERVAL '7 days'
WHERE email = 'julie.petit@example.com' AND subscribed = false;

-- ----------------------------------------
-- APPOINTMENTS
-- ----------------------------------------

INSERT INTO appointments (lead_id, calendly_event_id, scheduled_at, status, notes)
SELECT
  l.id,
  'cal_evt_' || substr(md5(l.email), 1, 12),
  now() + INTERVAL '3 days',
  'scheduled',
  'Appel stratégique 30 min'
FROM leads l WHERE l.email = 'jean.dupont@example.com'
ON CONFLICT DO NOTHING;

INSERT INTO appointments (lead_id, calendly_event_id, scheduled_at, status, notes)
SELECT
  l.id,
  'cal_evt_' || substr(md5(l.email), 1, 12),
  now() - INTERVAL '5 days',
  'completed',
  'Appel très positif, envoi proposition'
FROM leads l WHERE l.email = 'marie.martin@example.com'
ON CONFLICT DO NOTHING;

INSERT INTO appointments (lead_id, calendly_event_id, scheduled_at, status, notes)
SELECT
  l.id,
  'cal_evt_' || substr(md5(l.email), 1, 12),
  now() - INTERVAL '2 days',
  'no_show',
  NULL
FROM leads l WHERE l.email = 'lucas.moreau@example.com'
ON CONFLICT DO NOTHING;

-- ----------------------------------------
-- CONTACT MESSAGES
-- ----------------------------------------

INSERT INTO contact_messages (name, email, subject, message, status)
VALUES
  ('Caroline Blanc', 'caroline.blanc@example.com', 'Question sur vos services', 'Bonjour, je souhaiterais en savoir plus sur votre offre de consulting pour les TPE. Merci !', 'new'),
  ('Franck Dubois', 'franck.dubois@example.com', 'Demande de devis', 'Bonjour, pouvez-vous me faire un devis pour une formation de 2 jours ? Cordialement.', 'read'),
  ('Nathalie Simon', 'nathalie.simon@example.com', 'Partenariat', 'Bonjour, je suis consultante RH et j''aimerais discuter d''un partenariat potentiel.', 'replied');
