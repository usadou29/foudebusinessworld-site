import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
    Building2, 
    Plane, 
    ShoppingCart, 
    Users,
    ArrowRight,
    Play,
    Star,
    TrendingUp,
    Shield,
    Clock
} from 'lucide-react';
import Button from '../components/ui/Button';
import ServiceCard from '../components/ui/ServiceCard';
import SEOHead from '../components/SEOHead';

// Assets
const HERO_BG = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";
const DUBAI_IMG = "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop";
const CHINA_IMG = "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=2070&auto=format&fit=crop";
const GEORGIA_IMG = "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2066&auto=format&fit=crop";

const services = [
    {
        icon: <Building2 className="w-6 h-6" />,
        title: "Création de société internationale",
        description: "Structurez votre business avec une entité juridique adaptée. Dubaï, Hong Kong, Géorgie ou Europe.",
        features: [
            "Zéro impôt sur les revenus internationaux",
            "Setup complet en 7-15 jours",
            "Compte bancaire dédié",
            "Support juridique continu"
        ],
        href: "/services",
        ctaText: "Créer ma société",
        image: DUBAI_IMG,
        badge: "Populaire"
    },
    {
        icon: <Plane className="w-6 h-6" />,
        title: "Sourcing & Canton Fair",
        description: "Trouvez les meilleurs fournisseurs en Chine. Accompagnement sur place ou à distance.",
        features: [
            "Accès à +10 000 fournisseurs vérifiés",
            "Négociation directe en mandarin",
            "Contrôle qualité sur place",
            "Logistique clé en main"
        ],
        href: "/services",
        ctaText: "Accéder aux fournisseurs",
        image: CHINA_IMG,
        badge: "Expert"
    },
    {
        icon: <ShoppingCart className="w-6 h-6" />,
        title: "E-commerce & Marketplaces",
        description: "Lancez votre boutique en ligne avec Shopify, Amazon ou vos propres canaux de vente.",
        features: [
            "Boutique Shopify optimisée",
            "Stratégie Amazon FBA/FBM",
            "Marketing digital complet",
            "Automatisation des process"
        ],
        href: "/services",
        ctaText: "Lancer mon e-commerce",
        image: GEORGIA_IMG
    }
];

const stats = [
    { value: "500+", label: "Entrepreneurs accompagnés" },
    { value: "50M€+", label: "De revenus générés" },
    { value: "15+", label: "Pays couverts" },
    { value: "98%", label: "Taux de satisfaction" }
];

const testimonials = [
    {
        quote: "Grâce à FouDeBusinessWorld, j'ai créé ma société à Dubaï et lancé mon e-commerce en 3 mois. Un accompagnement de A à Z.",
        author: "Thomas M.",
        role: "Fondateur, TechStore.fr",
        rating: 5
    },
    {
        quote: "Le sourcing en Chine était un mystère pour moi. Aujourd'hui, j'ai 4 fournisseurs fiables et mes marges ont doublé.",
        author: "Sarah K.",
        role: "Importatrice, Mode Éthique",
        rating: 5
    }
];

export default function Home() {
    useTranslation('common');
    const { lang } = useParams();
    const currentLang = lang || 'fr';
    const lp = (path: string) => `/${currentLang}${path}`;

    return (
        <div className="bg-brand-dark min-h-screen text-white">
            <SEOHead titleKey="welcome" descriptionKey="tagline" />

            {/* Hero Section - Premium */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={HERO_BG}
                        alt="Business skyline"
                        className="w-full h-full object-cover scale-105 animate-fade-in"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                    {/* Gold accent glow */}
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8 animate-slide-up">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 glass-gold rounded-full">
                                <Star className="w-4 h-4 text-brand-gold" />
                                <span className="text-brand-gold text-sm font-medium">
                                    #1 en accompagnement business international
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight">
                                Créez et développez votre{' '}
                                <span className="premium-text-gradient font-bold">business à l'international</span>
                            </h1>

                            {/* Subtitle */}
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
                                De la création de société au sourcing en Chine, en passant par l'e-commerce : 
                                nous vous accompagnons de A à Z pour structurer et développer 
                                votre business partout dans le monde.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" href={lp('/contact')}>
                                    Réserver un appel stratégique
                                </Button>
                                <Button variant="outline" size="lg" href={lp('/services')}>
                                    Découvrir nos services
                                </Button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex items-center gap-6 pt-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 rounded-full bg-brand-surface border-2 border-brand-dark flex items-center justify-center text-xs font-medium"
                                        >
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm text-gray-400">
                                    <span className="text-white font-semibold">500+ entrepreneurs</span> nous font confiance
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Video/Stats Card */}
                        <div className="hidden lg:block relative">
                            <div className="glass rounded-2xl p-8 space-y-6">
                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-6">
                                    {stats.slice(0, 2).map((stat, idx) => (
                                        <div key={idx} className="text-center">
                                            <div className="text-3xl font-serif premium-text-gradient font-bold">{stat.value}</div>
                                            <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Video Placeholder */}
                                <div className="relative aspect-video rounded-lg overflow-hidden bg-brand-surface group cursor-pointer">
                                    <img
                                        src={DUBAI_IMG}
                                        alt="Témoignage"
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full glass-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Play className="w-6 h-6 text-brand-gold ml-1" />
                                        </div>
                                    </div>
                                </div>

                                <p className="text-center text-sm text-gray-400">
                                    "Découvrez comment nous transformons des idées en businesses rentables"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
                        <div className="w-1 h-2 bg-brand-gold rounded-full" />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-3xl md:text-4xl font-serif premium-text-gradient font-bold">{stat.value}</div>
                                <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 relative">
                <div className="absolute inset-0 premium-gradient-radial" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest">
                            Nos Services
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mt-4 mb-6">
                            Tout ce dont vous avez besoin pour{' '}
                            <span className="premium-text-gradient">réussir à l'international</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Que vous souhaitiez créer une société, trouver des fournisseurs ou lancer votre e-commerce, 
                            nous avons la solution adaptée à votre projet.
                        </p>
                    </div>

                    {/* Service Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <ServiceCard key={idx} {...service} />
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-12">
                        <Button variant="outline" size="lg" href={lp('/services')}>
                            Voir tous nos services
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Educational Section */}
            <section className="py-24 bg-brand-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left - Content */}
                        <div className="space-y-8">
                            <div>
                                <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest">
                                    Pourquoi nous choisir
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif font-medium mt-4">
                                    L'expertise qui fait la{' '}
                                    <span className="premium-text-gradient">différence</span>
                                </h2>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                Nous ne sommes pas qu'un simple prestataire de services. Nous sommes des entrepreneurs 
                                qui avons bâti nos propres businesses internationaux. Cette expérience terrain 
                                nous permet de vous accompagner avec des solutions éprouvées et pragmatiques.
                            </p>

                            {/* Benefits */}
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: <TrendingUp className="w-6 h-6" />,
                                        title: "Résultats mesurables",
                                        desc: "Nos clients génèrent en moyenne 50M€ de revenus cumulés. Votre succès est notre priorité."
                                    },
                                    {
                                        icon: <Shield className="w-6 h-6" />,
                                        title: "Sécurité juridique",
                                        desc: "Toutes nos structures sont 100% légales et optimisées fiscalement. Zero risque, maximum d'avantages."
                                    },
                                    {
                                        icon: <Clock className="w-6 h-6" />,
                                        title: "Gain de temps",
                                        desc: "Ce qui vous prendrait des mois à apprendre et mettre en place, nous le faisons en quelques semaines."
                                    },
                                    {
                                        icon: <Users className="w-6 h-6" />,
                                        title: "Communauté active",
                                        desc: "Rejoignez 500+ entrepreneurs qui échangent, partagent et s'entraident au quotidien."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="w-12 h-12 rounded-lg glass-gold flex items-center justify-center text-brand-gold flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                                            <p className="text-gray-400 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Image/Visual */}
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                                <img
                                    src={DUBAI_IMG}
                                    alt="Business success"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                            </div>
                            
                            {/* Floating Card */}
                            <div className="absolute -bottom-6 -left-6 glass rounded-xl p-6 max-w-xs">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div
                                                key={i}
                                                className="w-8 h-8 rounded-full bg-brand-gold/20 border-2 border-brand-dark"
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-400">+500 membres</span>
                                </div>
                                <p className="text-sm text-white">
                                    "La meilleure décision pour mon business"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest">
                            Témoignages
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-medium mt-4">
                            Ils ont transformé leur business avec nous
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, idx) => (
                            <div key={idx} className="glass rounded-2xl p-8">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-brand-gold fill-brand-gold" />
                                    ))}
                                </div>
                                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-semibold">
                                        {testimonial.author.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white">{testimonial.author}</div>
                                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 premium-gradient-radial" />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark" />
                
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6">
                        Prêt à passer au niveau supérieur ?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Réservez un appel stratégique gratuit de 30 minutes. Nous analysons votre projet 
                        et vous donnons un plan d'action concret pour développer votre business international.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="primary" size="lg" href={lp('/contact')}>
                            Réserver mon appel gratuit
                        </Button>
                        <Button variant="outline" size="lg" href={lp('/services')}>
                            Explorer nos services
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-gray-500">
                        Sans engagement • Réponse sous 24h • Places limitées
                    </p>
                </div>
            </section>
        </div>
    );
}
