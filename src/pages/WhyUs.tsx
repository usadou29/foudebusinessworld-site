import { useTranslation } from 'react-i18next';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SEOHead from '../components/SEOHead';
import { Target, CheckCircle } from 'lucide-react';

export default function WhyUs() {
    const { t } = useTranslation('common');

    return (
        <>
            <SEOHead
                title={t('why_us.title')}
                description={t('why_us.subtitle')}
            />

            {/* Hero */}
            <div className="bg-brand-dark pt-32 pb-16 border-b border-white/5">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">
                            {t('why_us.title')}
                        </h1>
                        <p className="text-xl text-gray-400 mb-8">
                            {t('why_us.subtitle')}
                        </p>
                        <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
                    </div>
                </Container>
            </div>

            {/* Intro & Objectives */}
            <Section className="bg-black">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-serif text-3xl text-white mb-6">{t('tagline')}</h2>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                {t('why_us.intro')}
                            </p>
                            <div className="flex gap-4">
                                <div className="p-4 bg-brand-surface border border-white/10 rounded-lg text-center flex-1">
                                    <span className="block text-2xl mb-1">🇦🇪</span>
                                    <span className="text-sm text-brand-gold font-bold">DUBAI</span>
                                </div>
                                <div className="p-4 bg-brand-surface border border-white/10 rounded-lg text-center flex-1">
                                    <span className="block text-2xl mb-1">🇨🇳</span>
                                    <span className="text-sm text-brand-gold font-bold">CHINA</span>
                                </div>
                                <div className="p-4 bg-brand-surface border border-white/10 rounded-lg text-center flex-1">
                                    <span className="block text-2xl mb-1">🇬🇪</span>
                                    <span className="text-sm text-brand-gold font-bold">GEORGIA</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-brand-surface p-8 rounded-xl border border-white/10">
                            <h3 className="text-xl text-brand-gold font-bold mb-6 flex items-center gap-2">
                                <Target className="h-6 w-6" /> {t('why_us.objectives.title')}
                            </h3>
                            <ul className="space-y-4">
                                {(t('why_us.objectives.list', { returnObjects: true }) as string[]).map((obj, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-brand-gold shrink-0 mt-1" />
                                        <span className="text-gray-300">{obj}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* 3 Pillars */}
            <Section className="bg-brand-dark">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl text-white">{t('why_us.pillars.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Pillar 1 */}
                        <div className="bg-black p-8 rounded-xl border border-white/10 text-center hover:border-brand-gold/50 transition-colors group">
                            <div className="w-16 h-16 bg-brand-surface rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-gold/20 transition-colors">
                                <span className="text-3xl">🎓</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{t('why_us.pillars.p1.title')}</h3>
                            <p className="text-gray-400">{t('why_us.pillars.p1.desc')}</p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-black p-8 rounded-xl border border-white/10 text-center hover:border-brand-gold/50 transition-colors group">
                            <div className="w-16 h-16 bg-brand-surface rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-gold/20 transition-colors">
                                <span className="text-3xl">♟️</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{t('why_us.pillars.p2.title')}</h3>
                            <p className="text-gray-400">{t('why_us.pillars.p2.desc')}</p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-black p-8 rounded-xl border border-white/10 text-center hover:border-brand-gold/50 transition-colors group">
                            <div className="w-16 h-16 bg-brand-surface rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-gold/20 transition-colors">
                                <span className="text-3xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{t('why_us.pillars.p3.title')}</h3>
                            <p className="text-gray-400">{t('why_us.pillars.p3.desc')}</p>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
