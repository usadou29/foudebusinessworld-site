import { render, screen } from '@testing-library/react';
import DashboardLayout from './DashboardLayout';
import { vi, describe, it, expect } from 'vitest';
import * as AuthContext from '../../context/AuthContext';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Create test i18n instance
const i18nTestInstance = i18next.createInstance();
i18nTestInstance.use(initReactI18next).init({
    lng: 'fr',
    fallbackLng: 'fr',
    resources: {},
    interpolation: { escapeValue: false },
    react: { useSuspense: false }
});

// Mock the AuthContext to simulate a logged-in user
const useAuthMock = vi.fn();
vi.mock('../../context/AuthContext', async (importOriginal) => {
    const actual = await importOriginal<typeof AuthContext>();
    return {
        ...actual,
        useAuth: () => useAuthMock(),
    };
});

describe('DashboardLayout', () => {
    it('renders sidebar links correctly', () => {
        useAuthMock.mockReturnValue({
            user: { email: 'test@example.com' },
            signOut: vi.fn(),
        });

        render(
            <I18nextProvider i18n={i18nTestInstance}>
                <HelmetProvider>
                    <MemoryRouter initialEntries={['/fr/dashboard']}>
                        <Routes>
                            <Route path="/fr/dashboard" element={<DashboardLayout />}>
                                <Route index element={<div>Dashboard Content</div>} />
                            </Route>
                        </Routes>
                    </MemoryRouter>
                </HelmetProvider>
            </I18nextProvider>
        );

        // Check for sidebar navigation items
        expect(screen.getByText('Tableau de bord')).toBeInTheDocument();
        expect(screen.getByText('Mes Formations')).toBeInTheDocument();
        expect(screen.getByText('Profil & Paramètres')).toBeInTheDocument();

        // Check for user email
        expect(screen.getByText('test@example.com')).toBeInTheDocument();

        // Check that the child route content renders
        expect(screen.getByText('Dashboard Content')).toBeInTheDocument();
    });
});
