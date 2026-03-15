import { Link, useParams } from 'react-router-dom';
import Section from '../../components/ui/Section';
import Container from '../../components/ui/Container';
import SEOHead from '../../components/SEOHead';
import { Building2, CheckCircle, ArrowRight, Shield, FileText, Globe, Star } from 'lucide-react';

export default function ServiceCreationSociete() {
  const { lang } = useParams();
  const currentLang = lang || 'fr';
  const lp = (path: string) => `/${currentLang}${path}`;
  const isFr = currentLang === 'fr';

  const features = isFr ? [
    'Analyse de votre projet et choix de juridiction',
    'Création société Freezone ou Mainland',
    'Ouverture compte bancaire corporate',
    'Obtention visas investisseur/résidence',
    'Conformité fiscale et reporting',
    'Support juridique continu 12 mois'
  ] : [
    'Project analysis and jurisdiction choice',
    'Freezone or Mainland company formation',
    'Corporate bank account opening',
    'Investor/residency visas',
    'Tax compliance and reporting',
    '12-month ongoing legal support'
  ];

  // 3 packs par pays
  const packsDubai = [
    {
      name: isFr ? 'Dubaï Freezone Starter' : 'Dubai Freezone Starter',
      price: '2 500 €',
      description: isFr ? 'Pour démarrer rapidement à Dubaï' : 'To start quickly in Dubai',
      features: isFr ? [
        'Création société Freezone',
        'Licence commerciale',
        '1 visa investisseur',
        'Support email 30 jours'
      ] : [
        'Freezone company formation',
        'Commercial license',
        '1 investor visa',
        '30-day email support'
      ]
    },
    {
      name: isFr ? 'Dubaï Freezone Business' : 'Dubai Freezone Business',
      price: '5 500 €',
      description: isFr ? 'La solution complète pour Dubaï' : 'Complete solution for Dubai',
      features: isFr ? [
        'Création société Freezone',
        'Licence commerciale',
        '2 visas investisseur',
        'Ouverture compte bancaire',
        'Support prioritaire 6 mois'
      ] : [
        'Freezone company formation',
        'Commercial license',
        '2 investor visas',
        'Bank account opening',
        '6-month priority support'
      ],
      popular: true
    },
    {
      name: isFr ? 'Dubaï Mainland Premium' : 'Dubai Mainland Premium',
      price: '9 900 €',
      description: isFr ? 'Accompagnement stratégique complet' : 'Complete strategic support',
      features: isFr ? [
        'Création société Mainland',
        'Licence commerciale premium',
        '3 visas + famille',
        'Banking premium (Stripe, Wise)',
        'Support dédié 12 mois',
        'Accès Club Privé'
      ] : [
        'Mainland company formation',
        'Premium commercial license',
        '3 visas + family',
        'Premium banking (Stripe, Wise)',
        '12-month dedicated support',
        'Private Club Access'
      ]
    }
  ];

  const packsHK = [
    {
      name: isFr ? 'Hong Kong Starter' : 'Hong Kong Starter',
      price: '1 800 €',
      description: isFr ? 'Entrée de gamme pour l\'Asie' : 'Entry level for Asia',
      features: isFr ? [
        'Création société HK',
        'Secrétariat sociétaire 1 an',
        'Adresse commerciale',
        'Support email'
      ] : [
        'HK company formation',
        'Company secretary 1 year',
        'Business address',
        'Email support'
      ]
    },
    {
      name: isFr ? 'Hong Kong Business' : 'Hong Kong Business',
      price: '3 500 €',
      description: isFr ? 'Solution complète Hong Kong' : 'Complete Hong Kong solution',
      features: isFr ? [
        'Création société HK',
        'Secrétariat + Comptabilité',
        'Adresse premium',
        'Compte bancaire offshore',
        'Support 6 mois'
      ] : [
        'HK company formation',
        'Secretary + Accounting',
        'Premium address',
        'Offshore bank account',
        '6-month support'
      ],
      popular: true
    },
    {
      name: isFr ? 'Hong Kong Premium' : 'Hong Kong Premium',
      price: '6 900 €',
      description: isFr ? 'Structure holding avancée' : 'Advanced holding structure',
      features: isFr ? [
        'Structure holding',
        'Multi-sociétés',
        'Banking premium',
        'Optimisation fiscale',
        'Support 12 mois',
        'Accès Club Privé'
      ] : [
        'Holding structure',
        'Multi-companies',
        'Premium banking',
        'Tax optimization',
        '12-month support',
        'Private Club Access'
      ]
    }
  ];

  const packsGeorgia = [
    {
      name: isFr ? 'Géorgie Starter' : 'Georgia Starter',
      price: '900 €',
      description: isFr ? 'Solution low-cost Europe' : 'Low-cost Europe solution',
      features: isFr ? [
        'Création société LLC',
        'Enregistrement TVA',
        'Adresse légale',
        'Support email'
      ] : [
        'LLC company formation',
        'VAT registration',
        'Legal address',
        'Email support'
      ]
    },
    {
      name: isFr ? 'Géorgie Business' : 'Georgia Business',
      price: '1 800 €',
      description: isFr ? 'Pack complet Géorgie' : 'Complete Georgia pack',
      features: isFr ? [
        'Création société LLC',
        'TVA + Comptabilité',
        'Compte bancaire local',
        'Résidence temporaire',
        'Support 6 mois'
      ] : [
        'LLC company formation',
        'VAT + Accounting',
        'Local bank account',
        'Temporary residency',
        '6-month support'
      ],
      popular: true
    },
    {
      name: isFr ? 'Géorgie Premium' : 'Georgia Premium',
      price: '3 500 €',
      description: isFr ? 'Résidence permanente incluse' : 'Permanent residency included',
      features: isFr ? [
        'Multi-sociétés',
        'Résidence permanente',
        'Comptes multi-devises',
        'Optimisation complète',
        'Support 12 mois',
        'Accès Club Privé'
      ] : [
        'Multi-companies',
        'Permanent residency',
        'Multi-currency accounts',
        'Full optimization',
        '12-month support',
        'Private Club Access'
      ]
    }
  ];

  const renderPack = (pack: typeof packsDubai[0]) => (
    <div
      key={pack.name}
      className={`glass rounded-2xl p-6 border transition-all duration-300 ${
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
      <h3 className="text-lg font-bold text-white mb-2">{pack.name}</h3>
      <div className="text-3xl font-serif text-brand-gold mb-2">{pack.price}</div>
      <p className="text-gray-400 text-sm mb-6">{pack.description}</p>
      <ul className="space-y-3 mb-6">
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
  );

  return (
    <>
      <SEOHead
        title={isFr ? "Création de Société | FouDeBusinessWorld" : "Company Formation | FouDeBusinessWorld"}
        description={isFr
          ? "Créez votre société à Dubaï, Hong Kong ou Géorgie. Accompagnement complet de la création à la banque."
          : "Create your company in Dubai, Hong Kong or Georgia. Complete support from formation to banking."}
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
              {isFr ? 'Création de Société' : 'Company Formation'}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {isFr
                ? 'Structurez votre activité internationale dans les meilleures juridictions. De la création à la banque, nous vous accompagnons à chaque étape.'
                : 'Structure your international business in the best jurisdictions. From formation to banking, we support you at every step.'}
            </p>
          </div>
        </Container>
      </section>

      {/* Features */}
      <Section className="bg-black">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Globe, title: isFr ? 'Multi-juridictions' : 'Multi-jurisdictions', desc: isFr ? 'Dubaï, Hong Kong, Géorgie' : 'Dubai, Hong Kong, Georgia' },
              { icon: Shield, title: isFr ? 'Conformité garantie' : 'Guaranteed compliance', desc: isFr ? 'Structures 100% légales' : '100% legal structures' },
              { icon: FileText, title: isFr ? 'Documentation' : 'Documentation', desc: isFr ? 'Tous documents inclus' : 'All documents included' },
              { icon: Building2, title: isFr ? 'Banking' : 'Banking', desc: isFr ? 'Ouverture comptes corporate' : 'Corporate account opening' },
              { icon: CheckCircle, title: isFr ? 'Visas' : 'Visas', desc: isFr ? 'Résidence investisseur' : 'Investor residency' },
              { icon: Star, title: isFr ? 'Support premium' : 'Premium support', desc: isFr ? 'Accompagnement dédié' : 'Dedicated support' }
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

          {/* Dubai Packs */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-4xl mb-4 block">🇦🇪</span>
              <h2 className="font-serif text-4xl text-white mb-4">Dubaï</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {isFr 
                  ? '0% d\'impôt sur le revenu, accès aux marchés MENA, infrastructure world-class'
                  : '0% income tax, MENA market access, world-class infrastructure'}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {packsDubai.map(renderPack)}
            </div>
          </div>

          {/* Hong Kong Packs */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-4xl mb-4 block">🇭🇰</span>
              <h2 className="font-serif text-4xl text-white mb-4">Hong Kong</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {isFr 
                  ? 'Porte d\'entrée vers la Chine, fiscalité attractive, réputation internationale'
                  : 'Gateway to China, attractive taxation, international reputation'}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {packsHK.map(renderPack)}
            </div>
          </div>

          {/* Georgia Packs */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-4xl mb-4 block">🇬🇪</span>
              <h2 className="font-serif text-4xl text-white mb-4">Géorgie</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {isFr 
                  ? 'Solution low-cost en Europe, fiscalité ultra-compétitive, création rapide'
                  : 'Low-cost solution in Europe, ultra-competitive taxation, fast setup'}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {packsGeorgia.map(renderPack)}
            </div>
          </div>

          {/* CTA */}
          <div className="glass rounded-2xl p-8 md:p-12 border border-brand-gold/20 text-center">
            <h2 className="font-serif text-3xl text-white mb-4">
              {isFr ? 'Besoin de conseils ?' : 'Need advice?'}
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              {isFr
                ? 'Chaque projet est unique. Discutons de la meilleure structure pour votre activité.'
                : 'Every project is unique. Let\'s discuss the best structure for your business.'}
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
