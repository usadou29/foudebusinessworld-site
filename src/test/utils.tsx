import React, { type ReactElement } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
export { screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '../context/AuthContext';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Create a new instance to avoid singleton conflicts and 'add' undefined errors
const i18nTestInstance = i18next.createInstance();

i18nTestInstance
    .use(initReactI18next)
    .init({
        lng: 'fr',
        fallbackLng: 'fr',
        ns: ['common'],
        defaultNS: 'common',
        resources: {
            fr: {
                common: {
                    auth: {
                        login: {
                            title: "Se connecter",
                            subtitle: "Accédez à votre espace",
                            email_label: "E-mail",
                            password_label: "Mot de passe",
                            submit: "Se connecter",
                            no_account: "Pas encore de compte ?",
                            register_link: "Créer un compte"
                        }
                    }
                }
            }
        },
        interpolation: {
            escapeValue: false,
        },
        react: {
            useSuspense: false,
        }
    });

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <I18nextProvider i18n={i18nTestInstance}>
            <HelmetProvider>
                <AuthProvider>
                    <BrowserRouter>
                        {children}
                    </BrowserRouter>
                </AuthProvider>
            </HelmetProvider>
        </I18nextProvider>
    );
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
