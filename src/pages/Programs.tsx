import { useTranslation } from 'react-i18next';

import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import SEOHead from '../components/SEOHead';
import { COUNTRIES } from '../data/countries';
import { PlayCircle } from 'lucide-react';

export default function Programs() {
    const { t } = useTranslation('common');

    return (
        <>
            <SEOHead
                title={t('programs_page.title')}
                description={t('programs_page.subtitle')}
            />

            <div className="bg-brand-dark pt-32 pb-16 border-b border-white/5">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">
                            {t('programs_page.title')}
                        </h1>
                        <p className="text-xl text-gray-400">
                            {t('programs_page.subtitle')}
                        </p>
                    </div>
                </Container>
            </div>

            <Section className="bg-black">
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {COUNTRIES.map((country) => (
                            <div key={country.id} className="bg-brand-surface rounded-xl overflow-hidden border border-white/10 group hover:border-brand-gold/50 transition-all flex flex-col">
                                <div className="h-48 relative overflow-hidden">
                                    <img
                                        src={country.image}
                                        alt={country.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <PlayCircle className="w-12 h-12 text-white" />
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-2xl">{country.flag}</span>
                                        <span className="text-brand-gold text-xs font-bold uppercase tracking-wider">Programme Complet</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Business {t(`countries_page.${country.id}.name`)}</h3>
                                    <p className="text-sm text-gray-400 mb-6 flex-1">
                                        {t(`countries_page.${country.id}.short_desc`)}
                                    </p>
                                    <div className="pt-6 border-t border-white/5">
                                        <Button fullWidth href={`/countries/${country.slug}`}>
                                            {t('programs_page.cta')}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </>
    );
}
