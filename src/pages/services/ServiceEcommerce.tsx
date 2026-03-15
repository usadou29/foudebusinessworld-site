import { Link, useParams } from 'react-router-dom';
import Section from '../../components/ui/Section';
import Container from '../../components/ui/Container';
import SEOHead from '../../components/SEOHead';
import { ShoppingCart, Globe, CheckCircle, ArrowRight, TrendingUp, Package, Star, Zap } from 'lucide-react';

export default function ServiceEcommerce() {
  const { lang } = useParams();
  const currentLang = lang || 'fr';
  const lp = (path: string) => `/${currentLang}${path}`;
  const isFr = currentLang === 'fr';

  const features = isFr ? [
    'Stratégie produit et positionnement',
    'Mise en place technique complète',
    'Sourcing et supply chain',
    'Marketing digital et acquisition',
    'Optimisation conversion',
    'Scaling et automatisation'
  ] : [
    'Product strategy and positioning',
    'Complete technical setup',
    'Sourcing and supply chain',
    'Digital marketing and acquisition',
    'Conversion optimization',
    'Scaling and automation'
  ];

  const packs = [
    {
      name: isFr ? 'E-com Starter' : 'E-com Starter',
      price: '1 000 €',
      description: isFr ? 'Pour tester un premier produit' : 'To test a first product',
      features: isFr ? [
        'Audit stratégique',
        'Sélection 1 produit',
        'Plan d\'action',
        'Templates inclus',
        'Support 30 jours'
      ] : [
        'Strategic audit',
        '1 product selection',
        'Action plan',
        'Templates included',
        '30-day support'
      ]
    },
    {
      name: isFr ? 'E-com Business' : 'E-com Business',
      price: '3 000 €',
      description: isFr ? 'Lancez votre boutique complète' : 'Launch your complete store',
      features: isFr ? [
        'Stratégie complète',
        'Sourcing produits',
        'Setup Shopify/Amazon',
        'Marketing setup',
        'Formation équipe',
        'Support 3 mois'
      ] : [
        'Complete strategy',
        'Product sourcing',
        'Shopify/Amazon setup',
        'Marketing setup',
        'Team training',
        '3-month support'
      ],
      popular: true
    },
    {
      name: isFr ? 'E-com Scale' : 'E-com Scale',
      price: '6 000 €',
      description: isFr ? 'Accélérez votre croissance' : 'Accelerate your growth',
      features: isFr ? [
        'Stratégie scaling',
        'Multi-produits',
        'Multi-canaux',
        'Automatisation',
        'Optimisation CRO',
        'Support 6 mois',
        'Accès Club Privé'
      ] : [
        'Scaling strategy',
        'Multi-products',
        'Multi-channels',
        'Automation',
        'CRO optimization',
        '6-month support',
        'Private Club Access'
      ]
    }
  ];

  const platforms = isFr ? [
    'Shopify', 'Amazon FBA', 'Etsy', 'eBay', 'WooCommerce', 'PrestaShop'
  ] : [
    'Shopify', 'Amazon FBA', 'Etsy', 'eBay', 'WooCommerce', 'PrestaShop'
  ];

  return (
    <>
      <SEOHead
        title={isFr ? "E-commerce | FouDeBusinessWorld" : "E-commerce | FouDeBusinessWorld"}
        description={isFr
          ? "Lancez et développez votre business e-commerce. Stratégie, sourcing, marketing et scaling."
          : "Launch and grow your e-commerce business. Strategy, sourcing, marketing and scaling."}
      />

      {/* Hero */}
      <section className="section-hero relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-black"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded text-sm font-bold uppercase tracking-wider mb-6">
              {isFr ? 'Services' : 'Services'}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">
              E-commerce
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {isFr
                ? 'De l\'idée au revenu récurrent. Nous vous accompagnons sur toute la chaîne : stratégie, sourcing, setup et scaling.'
                : 'From idea to recurring revenue. We support you throughout the chain: strategy, sourcing, setup and scaling.'}
            </p>
          </div>
        </Container>
      </section>

      {/* Features */}
      <Section className="bg-black">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { icon: TrendingUp, title: isFr ? 'Stratégie' : 'Strategy', desc: isFr ? 'Positionnement gagnant' : 'Winning positioning' },
              { icon: Package, title: isFr ? 'Sourcing' : 'Sourcing', desc: isFr ? 'Fournisseurs fiables' : 'Reliable suppliers' },
              { icon: ShoppingCart, title: isFr ? 'Setup' : 'Setup', desc: isFr ? 'Boutine optimisée' : 'Optimized store' },
              { icon: Zap, title: isFr ? 'Marketing' : 'Marketing', desc: isFr ? 'Acquisition clients' : 'Customer acquisition' },
              { icon: Globe, title: isFr ? 'Multi-canal' : 'Multi-channel', desc: isFr ? 'Amazon, Shopify...' : 'Amazon, Shopify...' },
              { icon: CheckCircle, title: isFr ? 'Scaling' : 'Scaling', desc: isFr ? 'Croissance rentable' : 'Profitable growth' }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-brand-surface border border-white/5">
                <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl text-white mb-4">
                {isFr ? 'Nos Packs E-commerce' : 'Our E-commerce Packages'}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {isFr 
                  ? 'Des solutions adaptées à votre niveau et vos objectifs de croissance'
                  : 'Solutions adapted to your level and growth objectives'}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {packs.map((pack, index) => (
                <div
                  key={index}
                  className={`glass rounded-2xl p-8 border transition-all duration-300 ${
                    pack.popular
                      ? 'border-brand-gold/50 scale-105 shadow-gold'
                      : 'border-white/10 hover:border-brand-gold/30'
                  }`}
                >
                  {pack.popular && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-gold text-black text-xs font-bold uppercase tracking-wider rounded mb-4">
                      <Star className="w-3 h-3" />
                      {isFr ? 'Populaire' : 'Popular'}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white mb-2">{pack.name}</h3>
                  <div className="text-4xl font-serif text-brand-gold mb-2">{pack.price}</div>
                  <p className="text-gray-400 text-sm mb-6">{pack.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pack.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={lp('/contact')}
                    className={`block w-full text-center px-6 py-3 rounded-sm font-semibold transition-all ${
                      pack.popular
                        ? 'premium-gradient text-black hover:shadow-gold'
                        : 'border border-white/20 text-white hover:bg-white/5'
                    }`}
                  >
                    {isFr ? 'Choisir' : 'Select'}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div className="glass rounded-2xl p-8 md:p-12 border border-white/10 mb-20">
            <h2 className="font-serif text-3xl text-white mb-8 text-center">
              {isFr ? 'Plateformes supportées' : 'Supported Platforms'}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {platforms.map((platform, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-brand-surface border border-white/10 rounded-lg text-white font-medium"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass rounded-2xl p-8 md:p-12 border border-brand-gold/20 text-center">
            <h2 className="font-serif text-3xl text-white mb-4">
              {isFr ? 'Prêt à vendre ?' : 'Ready to sell?'}
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              {isFr
                ? 'Discutons de votre projet e-commerce et trouvons la meilleure stratégie pour vous.'
                : 'Let\'s discuss your e-commerce project and find the best strategy for you.'}
            </p>
            <Link
              to={lp('/appel')}
              className="inline-flex items-center gap-2 px-8 py-4 premium-gradient text-black font-semibold rounded-sm hover:shadow-gold transition-all"
            >
              {isFr ? 'Appel stratégique gratuit' : 'Free strategy call'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
