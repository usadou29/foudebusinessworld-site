import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Section from '../../components/ui/Section';
import Container from '../../components/ui/Container';
import SEOHead from '../../components/SEOHead';
import { COUNTRIES } from '../../data/countries';
import { ArrowRight } from 'lucide-react';

export default function CountryHub() {
    const { t } = useTranslation('common');

    return (
        <>
            <SEOHead
                title={t('countries_page.title')}
                description={t('countries_page.subtitle')}
            />

            <div className="bg-brand-dark pt-32 pb-16 border-b border-white/5">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">
                            {t('countries_page.title')}
                        </h1>
                        <p className="text-xl text-gray-400 mb-8">
                            {t('countries_page.subtitle')}
                        </p>
                    </div>
                </Container>
            </div>

            <Section className="bg-black">
                <Container>
                    <div className="grid md:grid-cols-3 gap-8">
                        {COUNTRIES.map((country) => (
                            <Link
                                key={country.id}
                                to={`/countries/${country.slug}`}
                                className="group block bg-brand-surface rounded-xl overflow-hidden border border-white/10 hover:border-brand-gold transition-all duration-300"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img
                                        src={country.image}
                                        alt={t(`countries_page.${country.id}.name`)}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-4xl">{country.flag}</span>
                                        <h2 className="text-2xl font-bold text-white">{t(`countries_page.${country.id}.name`)}</h2>
                                    </div>
                                    <p className="text-gray-400 mb-6 min-h-[48px]">
                                        {t(`countries_page.${country.id}.short_desc`)}
                                    </p>
                                    <div className="flex items-center text-brand-gold font-bold text-sm uppercase tracking-wide">
                                        {t('cta.learn_more')} <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Section>
        </>
    );
}
