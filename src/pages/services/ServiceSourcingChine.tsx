import { Link, useParams } from 'react-router-dom';
import Section from '../../components/ui/Section';
import Container from '../../components/ui/Container';
import SEOHead from '../../components/SEOHead';
import { Search, Factory, CheckCircle, ArrowRight, Shield, Plane, Package, Star } from 'lucide-react';

export default function ServiceSourcingChine() {
  const { lang } = useParams();
  const currentLang = lang || 'fr';
  const lp = (path: string) => `/${currentLang}${path}`;
  const isFr = currentLang === 'fr';

  const features = isFr ? [
    'Recherche et vérification de fournisseurs',
    'Négociation des prix et conditions',
    'Contrôle qualité sur place',
    'Gestion logistique et shipping',
    'Conformité douanière',
    'Support continu post-achat'
  ] : [
    'Supplier research and verification',
    'Price and terms negotiation',
    'On-site quality control',
    'Logistics and shipping management',
    'Customs compliance',
    'Ongoing post-purchase support'
  ];

  const packs = [
    {
      name: isFr ? 'Sourcing Basic' : 'Sourcing Basic',
      price: '500 €',
      description: isFr ? 'Pour les petites commandes test' : 'For small test orders',
      features: isFr ? [
        'Recherche de 3 fournisseurs',
        'Vérification basique',
        'Premier contact',
        'Rapport comparatif',
        'Support email'
      ] : [
        'Research of 3 suppliers',
        'Basic verification',
        'Initial contact',
        'Comparison report',
        'Email support'
      ]
    },
    {
      name: isFr ? 'Sourcing Pro' : 'Sourcing Pro',
      price: '1 500 €',
      description: isFr ? 'Pour commandes régulières' : 'For regular orders',
      features: isFr ? [
        'Recherche de 5 fournisseurs',
        'Audit complet sur place',
        'Négociation prix',
        'Contrôle qualité 1 lot',
        'Gestion logistique',
        'Support 3 mois'
      ] : [
        'Research of 5 suppliers',
        'Complete on-site audit',
        'Price negotiation',
        'Quality control 1 batch',
        'Logistics management',
        '3-month support'
      ],
      popular: true
    },
    {
      name: isFr ? 'Sourcing VIP' : 'Sourcing VIP',
      price: '3 000 €',
      description: isFr ? 'Accompagnement complet' : 'Complete support',
      features: isFr ? [
        'Recherche illimitée',
        'Audit + Visite usine',
        'Négociation stratégique',
        'Contrôles qualité illimités',
        'Shipping & Douanes',
        'Support 6 mois',
        'Accès Club Privé'
      ] : [
        'Unlimited research',
        'Audit + Factory visit',
        'Strategic negotiation',
        'Unlimited quality controls',
        'Shipping & Customs',
        '6-month support',
        'Private Club Access'
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title={isFr ? "Sourcing Chine | FouDeBusinessWorld" : "China Sourcing | FouDeBusinessWorld"}
        description={isFr
          ? "Trouvez les meilleurs fournisseurs en Chine. Vérification, négociation et contrôle qualité inclus."
          : "Find the best suppliers in China. Verification, negotiation and quality control included."}
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
              {isFr ? 'Sourcing Chine' : 'China Sourcing'}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {isFr
                ? 'Accédez aux meilleurs fournisseurs chinois sans les risques. Nous vérifions, négocions et contrôlons pour vous.'
                : 'Access the best Chinese suppliers without the risks. We verify, negotiate and control for you.'}
            </p>
          </div>
        </Container>
      </section>

      {/* Features */}
      <Section className="bg-black">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Search, title: isFr ? 'Recherche' : 'Research', desc: isFr ? 'Fournisseurs vérifiés' : 'Verified suppliers' },
              { icon: Factory, title: isFr ? 'Audit' : 'Audit', desc: isFr ? 'Visites sur place' : 'On-site visits' },
              { icon: Shield, title: isFr ? 'Sécurité' : 'Security', desc: isFr ? 'Vérification légale' : 'Legal verification' },
              { icon: Package, title: isFr ? 'Qualité' : 'Quality', desc: isFr ? 'Contrôles rigoureux' : 'Rigorous controls' },
              { icon: Plane, title: isFr ? 'Logistique' : 'Logistics', desc: isFr ? 'Shipping & douanes' : 'Shipping & customs' },
              { icon: CheckCircle, title: isFr ? 'Garantie' : 'Guarantee', desc: isFr ? 'Satisfaction assurée' : 'Guaranteed satisfaction' }
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
                {isFr ? 'Nos Packs Sourcing' : 'Our Sourcing Packages'}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {isFr 
                  ? 'Des solutions adaptées à votre volume d\'achat et vos besoins'
                  : 'Solutions adapted to your purchase volume and needs'}
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

          {/* Process */}
          <div className="glass rounded-2xl p-8 md:p-12 border border-white/10 mb-20">
            <h2 className="font-serif text-3xl text-white mb-8 text-center">
              {isFr ? 'Notre Processus' : 'Our Process'}
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: isFr ? 'Brief' : 'Brief', desc: isFr ? 'Définition de vos besoins' : 'Defining your needs' },
                { step: '2', title: isFr ? 'Recherche' : 'Research', desc: isFr ? 'Identification fournisseurs' : 'Supplier identification' },
                { step: '3', title: isFr ? 'Vérification' : 'Verification', desc: isFr ? 'Audit et négociation' : 'Audit and negotiation' },
                { step: '4', title: isFr ? 'Livraison' : 'Delivery', desc: isFr ? 'Contrôle et shipping' : 'Control and shipping' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-white font-medium mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass rounded-2xl p-8 md:p-12 border border-brand-gold/20 text-center">
            <h2 className="font-serif text-3xl text-white mb-4">
              {isFr ? 'Prêt à sourcer ?' : 'Ready to source?'}
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              {isFr
                ? 'Discutons de votre projet et trouvons les meilleurs fournisseurs pour votre activité.'
                : 'Let\'s discuss your project and find the best suppliers for your business.'}
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
