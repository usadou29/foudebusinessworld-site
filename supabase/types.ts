// ============================================================
// FouDeBusinessWorld — Supabase TypeScript Types
// Version: 1.0.0
// Généré le: 2026-03-15
// ============================================================

// ----------------------------------------
// Enums
// ----------------------------------------

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';

export type AppointmentStatus = 'scheduled' | 'completed' | 'cancelled' | 'no_show';

export type MessageStatus = 'new' | 'read' | 'replied';

// ----------------------------------------
// Database Row Types
// ----------------------------------------

export interface Lead {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  phone: string | null;
  company: string | null;
  source: string | null;
  service_interest: string[];
  status: LeadStatus;
  notes: string | null;
  calendly_event_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface NewsletterSubscription {
  id: string;
  email: string;
  first_name: string | null;
  subscribed: boolean;
  subscribed_at: string;
  unsubscribed_at: string | null;
  source: string | null;
}

export interface Appointment {
  id: string;
  lead_id: string | null;
  calendly_event_id: string | null;
  scheduled_at: string;
  status: AppointmentStatus;
  notes: string | null;
  created_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  status: MessageStatus;
  created_at: string;
}

// ----------------------------------------
// Insert Types (champs optionnels pour création)
// ----------------------------------------

export interface LeadInsert {
  email: string;
  first_name?: string | null;
  last_name?: string | null;
  phone?: string | null;
  company?: string | null;
  source?: string | null;
  service_interest?: string[];
  status?: LeadStatus;
  notes?: string | null;
  calendly_event_id?: string | null;
}

export interface NewsletterSubscriptionInsert {
  email: string;
  first_name?: string | null;
  subscribed?: boolean;
  source?: string | null;
}

export interface AppointmentInsert {
  lead_id?: string | null;
  calendly_event_id?: string | null;
  scheduled_at: string;
  status?: AppointmentStatus;
  notes?: string | null;
}

export interface ContactMessageInsert {
  name: string;
  email: string;
  subject?: string | null;
  message: string;
}

// ----------------------------------------
// Update Types (tous les champs optionnels)
// ----------------------------------------

export interface LeadUpdate {
  email?: string;
  first_name?: string | null;
  last_name?: string | null;
  phone?: string | null;
  company?: string | null;
  source?: string | null;
  service_interest?: string[];
  status?: LeadStatus;
  notes?: string | null;
  calendly_event_id?: string | null;
}

export interface NewsletterSubscriptionUpdate {
  email?: string;
  first_name?: string | null;
  subscribed?: boolean;
  unsubscribed_at?: string | null;
  source?: string | null;
}

export interface AppointmentUpdate {
  lead_id?: string | null;
  calendly_event_id?: string | null;
  scheduled_at?: string;
  status?: AppointmentStatus;
  notes?: string | null;
}

export interface ContactMessageUpdate {
  status?: MessageStatus;
}

// ----------------------------------------
// Supabase Database Type (pour le client typé)
// ----------------------------------------

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: Lead;
        Insert: LeadInsert;
        Update: LeadUpdate;
      };
      newsletter_subscriptions: {
        Row: NewsletterSubscription;
        Insert: NewsletterSubscriptionInsert;
        Update: NewsletterSubscriptionUpdate;
      };
      appointments: {
        Row: Appointment;
        Insert: AppointmentInsert;
        Update: AppointmentUpdate;
      };
      contact_messages: {
        Row: ContactMessage;
        Insert: ContactMessageInsert;
        Update: ContactMessageUpdate;
      };
    };
    Views: {};
    Functions: {};
    Enums: {
      lead_status: LeadStatus;
      appointment_status: AppointmentStatus;
      message_status: MessageStatus;
    };
  };
}
