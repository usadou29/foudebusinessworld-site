import { vi } from 'vitest';

export const supabase = {
    auth: {
        getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null }),
        onAuthStateChange: vi.fn().mockReturnValue({ data: { subscription: { unsubscribe: vi.fn() } } }),
        signInWithPassword: vi.fn(),
        signOut: vi.fn(),
    },
};
