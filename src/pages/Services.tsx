import { useTranslation } from 'react-i18next';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SEOHead from '../components/SEOHead';
import { PILLARS } from '../data/pillars';

export default function Services() {
    const { t } = useTranslation('common');

    return (
        <>
            <SEOHead
                title={t('services_page.title')}
                description={t('services_page.subtitle')}
            />

            <div className="bg-brand-dark pt-32 pb-16 border-b border-white/5">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">
                            {t('services_page.title')}
                        </h1>
                        <p className="text-xl text-gray-400">
                            {t('services_page.subtitle')}
                        </p>
                    </div>
                </Container>
            </div>

            <Section className="bg-black">
                <Container>
                    <div className="grid md:grid-cols-3 gap-8">
                        {PILLARS.map((pillar) => (
                            <div key={pillar.id} className="bg-brand-surface p-8 rounded-xl border border-white/10 hover:border-brand-gold transition-colors">
                                <div className="text-4xl mb-6">{pillar.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {t(`home.pillars.${pillar.id}.title`, pillar.title)}
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    {t(`home.pillars.${pillar.id}.desc`, pillar.description)}
                                </p>
                                <ul className="space-y-3">
                                    {pillar.points.map((point, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </>
    );
}
