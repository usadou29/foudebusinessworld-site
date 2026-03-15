import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('./src/lib/supabase', () => ({
    supabase: {
        auth: {
            signInWithPassword: vi.fn(),
            getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null }),
            onAuthStateChange: vi.fn().mockReturnValue({ data: { subscription: { unsubscribe: vi.fn() } } }),
        }
    }
}));
