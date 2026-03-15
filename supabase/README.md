# FouDeBusinessWorld — Supabase Setup

## 📋 Vue d'ensemble

Scripts de base de données pour le site FouDeBusinessWorld (Next.js 14).

| Table | Rôle |
|---|---|
| `leads` | Prospects / contacts commerciaux |
| `newsletter_subscriptions` | Inscrits à la newsletter |
| `appointments` | Réservations d'appels (Calendly) |
| `contact_messages` | Messages du formulaire de contact |

## 🚀 Installation

### Ordre d'exécution

Exécuter les scripts **dans cet ordre** dans le SQL Editor de Supabase :

```
1. schema.sql        → Crée les tables, enums, index et triggers
2. rls-policies.sql  → Configure la sécurité Row Level Security
3. seed.sql          → (Optionnel) Injecte des données de test
```

### Étapes

1. Aller sur [app.supabase.com](https://app.supabase.com)
2. Ouvrir le projet FouDeBusinessWorld
3. Aller dans **SQL Editor**
4. Coller et exécuter `schema.sql`
5. Coller et exécuter `rls-policies.sql`
6. *(Dev uniquement)* Coller et exécuter `seed.sql`

## 🔒 Sécurité (RLS)

| Table | `anon` (visiteur) | `authenticated` (admin) |
|---|---|---|
| `leads` | INSERT ✅ | SELECT, INSERT, UPDATE, DELETE ✅ |
| `newsletter_subscriptions` | INSERT ✅ | SELECT, INSERT, UPDATE, DELETE ✅ |
| `appointments` | ❌ | SELECT, INSERT, UPDATE, DELETE ✅ |
| `contact_messages` | INSERT ✅ | SELECT, INSERT, UPDATE, DELETE ✅ |

> **Note :** Le `service_role` bypass RLS par défaut. Utilisez-le pour les Edge Functions / webhooks.

## 🔑 Configuration Next.js

### Variables d'environnement

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
```

### Client Supabase typé

```typescript
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/supabase/types';

// Client public (côté client, respecte RLS)
export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Client admin (côté serveur uniquement, bypass RLS)
export const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
```

## 📝 Exemples d'utilisation

### Soumettre un lead (côté client)

```typescript
const { error } = await supabase.from('leads').insert({
  email: 'prospect@example.com',
  first_name: 'Jean',
  source: 'homepage',
  service_interest: ['consulting', 'formation'],
});
```

### Inscription newsletter

```typescript
const { error } = await supabase.from('newsletter_subscriptions').insert({
  email: 'user@example.com',
  first_name: 'Marie',
  source: 'footer',
});
```

### Envoyer un message de contact

```typescript
const { error } = await supabase.from('contact_messages').insert({
  name: 'Pierre Durand',
  email: 'pierre@example.com',
  subject: 'Question sur vos services',
  message: 'Bonjour, je souhaite...',
});
```

### Lister les leads (côté admin, authentifié)

```typescript
const { data: leads } = await supabase
  .from('leads')
  .select('*')
  .order('created_at', { ascending: false });
```

## 🔌 Edge Functions (recommandées)

### 1. Webhook Calendly → Création d'appointment

Quand un prospect réserve un appel via Calendly :

```
POST /functions/v1/calendly-webhook
```

Cette function devrait :
- Recevoir le payload Calendly
- Créer ou retrouver le lead par email
- Créer un appointment lié
- (Optionnel) Envoyer une notification admin

### 2. Notification admin (nouveau lead / nouveau message)

```
POST /functions/v1/notify-admin
```

Options d'implémentation :
- **Email** via Resend / SendGrid / Supabase SMTP
- **Webhook Discord/Slack**
- **n8n webhook** (recommandé vu le stack existant)

### 3. Email de confirmation newsletter

```
POST /functions/v1/confirm-subscription
```

Déclenché après insertion dans `newsletter_subscriptions` (via Database Webhook dans Supabase).

## 🔄 Évolutions futures

- [ ] Table `members` pour espace membre
- [ ] Table `resources` pour contenu premium
- [ ] Intégration Stripe pour paiements
- [ ] Historique d'activité par lead (table `lead_activities`)
- [ ] Tags/segments sur les leads

## ⚠️ Actions manuelles sur Supabase

1. **Créer un utilisateur admin** : Authentication → Add user (email + password)
2. **Configurer les Database Webhooks** (si Edge Functions) : Database → Webhooks
3. **Vérifier les CORS** : Settings → API → ajouter le domaine de prod
4. **Sauvegarder la clé service_role** : Settings → API → ne jamais exposer côté client
