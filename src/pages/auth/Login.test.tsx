import { render, screen, fireEvent, waitFor } from '../../test/utils';
import Login from './Login';
import { supabase } from '../../lib/supabase';
import { vi, describe, it, expect, beforeEach } from 'vitest';

// Mock Supabase
// vi.mock('../../lib/supabase'); // Use global mock


describe('Login Page', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders login form correctly', () => {
        render(<Login />);

        expect(screen.getByRole('heading', { name: /se connecter/i })).toBeInTheDocument();
        expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/mot de passe/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /se connecter/i })).toBeInTheDocument();
    });

    it('allows typing in email and password', () => {
        render(<Login />);

        const emailInput = screen.getByLabelText(/e-mail/i);
        const passwordInput = screen.getByLabelText(/mot de passe/i);

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        expect(emailInput).toHaveValue('test@example.com');
        expect(passwordInput).toHaveValue('password123');
    });

    it('calls signInWithPassword on form submission', async () => {
        (supabase.auth.signInWithPassword as any).mockResolvedValue({ error: null });

        render(<Login />);

        fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText(/mot de passe/i), { target: { value: 'password123' } });

        fireEvent.click(screen.getByRole('button', { name: /se connecter/i }));

        await waitFor(() => {
            expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
                email: 'test@example.com',
                password: 'password123'
            });
        });
    });

    it('displays error message on failure', async () => {
        (supabase.auth.signInWithPassword as any).mockResolvedValue({
            error: { message: 'Invalid credentials' }
        });

        render(<Login />);

        fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: 'wrong@example.com' } });
        fireEvent.change(screen.getByLabelText(/mot de passe/i), { target: { value: 'wrong' } });

        fireEvent.click(screen.getByRole('button', { name: /se connecter/i }));

        await waitFor(() => {
            expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
        });
    });
});
