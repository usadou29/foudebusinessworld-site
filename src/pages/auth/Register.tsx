import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import Button from '../../components/ui/Button';
import Container from '../../components/ui/Container';
import SEOHead from '../../components/SEOHead';

export default function Register() {
    const { t } = useTranslation('common');
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            // Upon successful registration, redirect to login or dashboard
            // Note: Supabase might require email confirmation by default.
            navigate('/dashboard');
        }
    };

    return (
        <>
            <SEOHead title={t('auth.register.title')} />

            <div className="min-h-screen pt-32 pb-16 flex items-center justify-center bg-black">
                <Container>
                    <div className="max-w-md mx-auto w-full bg-brand-surface border border-white/10 rounded-2xl p-8">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-serif text-white mb-2">{t('auth.register.title')}</h1>
                            <p className="text-gray-400">{t('auth.register.subtitle')}</p>
                        </div>

                        {error && (
                            <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg mb-6 text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleRegister} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">
                                    {t('auth.register.email_label')}
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">
                                    {t('auth.register.password_label')}
                                </label>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                                />
                            </div>

                            <Button fullWidth variant="primary" disabled={loading}>
                                {loading ? '...' : t('auth.register.submit')}
                            </Button>
                        </form>

                        <div className="mt-6 text-center text-sm text-gray-500">
                            {t('auth.register.has_account')} {' '}
                            <Link to="/login" className="text-brand-gold hover:underline font-bold">
                                {t('auth.register.login_link')}
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}
