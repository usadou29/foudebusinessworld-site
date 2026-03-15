import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Section from '../../components/ui/Section';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import SEOHead from '../../components/SEOHead';
import { COUNTRIES } from '../../data/countries';
import { CheckCircle, MapPin } from 'lucide-react';

export default function CountryDetail() {
    const { slug } = useParams();
    const { t } = useTranslation('common');

    // Find country data (mostly for image/flag, text comes from i18n)
    const country = COUNTRIES.find(c => c.slug === slug);

    if (!country) {
        return <Navigate to="/countries" replace />;
    }

    // Get translated features array
    const features = t(`countries_page.${country.id}.features`, { returnObjects: true }) as string[];

    return (
        <>
            <SEOHead
                title={`${t(`countries_page.${country.id}.name`)} - FouDeBusinessWorld`}
                description={t(`countries_page.${country.id}.short_desc`)}
            />

            {/* Hero */}
            <div className="relative pt-32 pb-24 bg-brand-dark overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={country.image}
                        alt={country.name}
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/90 to-black"></div>
                </div>

                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-6xl">{country.flag}</span>
                            <span className="px-3 py-1 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded text-sm font-bold uppercase tracking-wider">
                                Hub Stratégique
                            </span>
                        </div>
                        <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">
                            {t(`countries_page.${country.id}.name`)}
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                            {t(`countries_page.${country.id}.full_desc`)}
                        </p>
                        <div className="flex gap-4">
                            <Button variant="primary" size="lg" href="/contact">
                                {t('cta.start')}
                            </Button>
                            <Button variant="outline" size="lg" href="/programs">
                                Voir les formations
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Content */}
            <Section className="bg-black">
                <Container>
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-serif text-white mb-8">Points Clés & Opportunités</h2>
                            <div className="space-y-6">
                                {features.map((feature, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-brand-surface border border-white/5 hover:border-brand-gold/30 transition-colors">
                                        <CheckCircle className="h-6 w-6 text-brand-gold shrink-0" />
                                        <span className="text-gray-300 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-brand-surface border border-white/10 rounded-2xl p-8 sticky top-32 h-fit">
                            <h3 className="text-xl font-bold text-white mb-6">Pourquoi {t(`countries_page.${country.id}.name`)} ?</h3>
                            <ul className="space-y-4 mb-8 text-sm text-gray-400">
                                <li className="flex items-center gap-3">
                                    <MapPin className="h-4 w-4 text-brand-gold" />
                                    <span>Accompagnement sur place disponible</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="h-4 w-4 text-brand-gold" />
                                    <span>Réseau de partenaires vérifiés</span>
                                </li>
                            </ul>
                            <div className="p-4 bg-brand-dark/50 rounded-lg border border-white/5 mb-6">
                                <p className="text-gray-300 italic text-sm">
                                    "Nous ne vendons pas du rêve, mais des structures juridiques et logistiques solides."
                                </p>
                            </div>
                            <Button variant="secondary" fullWidth href="/contact">
                                Prendre RDV (Conseil)
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
