import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import Button from '../../components/ui/Button';
import Container from '../../components/ui/Container';
import SEOHead from '../../components/SEOHead';

export default function Login() {
    const { t, i18n } = useTranslation('common');
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const lang = i18n.language || 'fr';
    const from = location.state?.from?.pathname || `/${lang}/dashboard`;

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            navigate(from, { replace: true });
        }
    };

    return (
        <>
            <SEOHead title={t('auth.login.title')} />

            <div className="min-h-screen pt-32 pb-16 flex items-center justify-center bg-black">
                <Container>
                    <div className="max-w-md mx-auto w-full bg-brand-surface border border-white/10 rounded-2xl p-8">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-serif text-white mb-2">{t('auth.login.title')}</h1>
                            <p className="text-gray-400">{t('auth.login.subtitle')}</p>
                        </div>

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg mb-6 text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">
                                    {t('auth.login.email_label')}
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">
                                    {t('auth.login.password_label')}
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                                />
                            </div>

                            <Button fullWidth variant="primary" disabled={loading}>
                                {loading ? '...' : t('auth.login.submit')}
                            </Button>
                        </form>

                        <div className="mt-6 text-center text-sm text-gray-500">
                            {t('auth.login.no_account')} {' '}
                            <Link to={`/${lang}/register`} className="text-brand-gold hover:underline font-bold">
                                {t('auth.login.register_link')}
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}
