import { useTranslation } from 'react-i18next';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import SEOHead from '../components/SEOHead';
import { Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
    const { t } = useTranslation('common');

    return (
        <>
            <SEOHead
                title={t('contact_page.title')}
                description={t('contact_page.subtitle')}
            />

            <div className="bg-brand-dark pt-32 pb-16 border-b border-white/5">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">
                            {t('contact_page.title')}
                        </h1>
                        <p className="text-xl text-gray-400">
                            {t('contact_page.subtitle')}
                        </p>
                    </div>
                </Container>
            </div>

            <Section className="bg-black">
                <Container>
                    <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-8">Informations</h2>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-12 h-12 bg-brand-surface rounded-full flex items-center justify-center border border-white/10 shrink-0">
                                        <Mail className="h-5 w-5 text-brand-gold" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider">{t('contact_page.info.email')}</p>
                                        <a href="mailto:contact@foudebusinessworld.com" className="text-lg text-white hover:text-brand-gold">contact@foudebusiness.com</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-12 h-12 bg-brand-surface rounded-full flex items-center justify-center border border-white/10 shrink-0">
                                        <MessageSquare className="h-5 w-5 text-brand-gold" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider">{t('contact_page.info.whatsapp')}</p>
                                        <p className="text-lg text-white">+33 6 89 46 00 12</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <form className="bg-brand-surface border border-white/10 p-8 rounded-2xl space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">{t('contact_page.form.name')}</label>
                                <input type="text" className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">{t('contact_page.form.email')}</label>
                                <input type="email" className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">{t('contact_page.form.message')}</label>
                                <textarea rows={4} className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"></textarea>
                            </div>
                            <Button fullWidth variant="primary">
                                {t('contact_page.form.submit')}
                            </Button>
                        </form>
                    </div>
                </Container>
            </Section>
        </>
    );
}
