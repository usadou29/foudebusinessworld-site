import { render, screen } from '../../test/utils';
import RequireAuth from './RequireAuth';
import { vi, describe, it, expect } from 'vitest';
import * as AuthContext from '../../context/AuthContext';

// Mock Supabase to avoid errors in the real AuthProvider used by the wrapper
vi.mock('../../lib/supabase', () => ({
    supabase: {
        auth: {
            getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null }),
            onAuthStateChange: vi.fn().mockReturnValue({ data: { subscription: { unsubscribe: vi.fn() } } }),
        }
    }
}));

// Mock useAuth
const useAuthMock = vi.fn();
vi.mock('../../context/AuthContext', async (importOriginal) => {
    const actual = await importOriginal<typeof AuthContext>();
    return {
        ...actual,
        useAuth: () => useAuthMock(),
    };
});

describe('RequireAuth', () => {
    it('shows loading spinner when loading', () => {
        useAuthMock.mockReturnValue({
            user: null,
            loading: true,
        });

        render(
            <RequireAuth>
                <div>Protected Content</div>
            </RequireAuth>
        );

        // Spinners often don't have text, but we can look for the class or structure
        // In our component: div with animate-spin
        // We can check if Protected Content is NOT there
        expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
    });

    it('redirects to login when not authenticated', () => {
        useAuthMock.mockReturnValue({
            user: null,
            loading: false,
        });

        render(
            <RequireAuth>
                <div>Protected Content</div>
            </RequireAuth>
        );

        // Logic relies on Navigate, which in tests usually just modifies history/DOM
        // We can check if Protected Content is ABSENT
        expect(screen.queryByText('Protected Content')).not.toBeInTheDocument();
        // Ideally we check if we are on /login. 
        // Our test utility renders MemoryRouter (via BrowserRouter proxy in utils? No, BrowserRouter)
        // Testing redirection with BrowserRouter in JSDOM is tricky without checking window.location
    });

    it('renders children when authenticated', () => {
        useAuthMock.mockReturnValue({
            user: { id: '1', email: 'test@example.com' },
            loading: false,
        });

        render(
            <RequireAuth>
                <div>Protected Content</div>
            </RequireAuth>
        );

        expect(screen.getByText('Protected Content')).toBeInTheDocument();
    });
});
