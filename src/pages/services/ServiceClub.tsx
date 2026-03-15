import { Link, useParams } from 'react-router-dom';
import Section from '../../components/ui/Section';
import Container from '../../components/ui/Container';
import SEOHead from '../../components/SEOHead';
import { Users, Star, CheckCircle, ArrowRight, MessageCircle, Zap, Lock, Gift } from 'lucide-react';

export default function ServiceClub() {
  const { lang } = useParams();
  const currentLang = lang || 'fr';
  const lp = (path: string) => `/${currentLang}${path}`;
  const isFr = currentLang === 'fr';

  const features = isFr ? [
    'Accès au réseau privé d\'entrepreneurs',
    'Masterminds mensuels en ligne',
    'Deals et opportunités exclusives',
    'Support prioritaire',
    'Contenu premium',
    'Événements membres uniquement'
  ] : [
    'Access to private entrepreneur network',
    'Monthly online masterminds',
    'Exclusive deals and opportunities',
    'Priority support',
    'Premium content',
    'Members-only events'
  ];

  const benefits = isFr ? [
    { icon: Users, title: 'Réseau', desc: '100+ entrepreneurs actifs' },
    { icon: MessageCircle, title: 'Mastermind', desc: 'Sessions mensuelles' },
    { icon: Zap, title: 'Deals', desc: 'Opportunités exclusives' },
    { icon: Lock, title: 'Contenu', desc: 'Ressources premium' },
    { icon: Star, title: 'Support', desc: 'Prioritaire et dédié' },
    { icon: Gift, title: 'Events', desc: 'Événements privés' }
  ] : [
    { icon: Users, title: 'Network', desc: '100+ active entrepreneurs' },
    { icon: MessageCircle, title: 'Mastermind', desc: 'Monthly sessions' },
    { icon: Zap, title: 'Deals', desc: 'Exclusive opportunities' },
    { icon: Lock, title: 'Content', desc: 'Premium resources' },
    { icon: Star, title: 'Support', desc: 'Priority and dedicated' },
    { icon: Gift, title: 'Events', desc: 'Private events' }
  ];

  return (
    <>
      <SEOHead
        title={isFr ? "Club Privé | FouDeBusinessWorld" : "Private Club | FouDeBusinessWorld"}
        description={isFr
          ? "Rejoignez le club privé d'entrepreneurs internationaux. Réseau, deals exclusifs et masterminds."
          : "Join the private club of international entrepreneurs. Network, exclusive deals and masterminds."}
      />

      {/* Hero */}
      <section className="section-hero relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-black"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded text-sm font-bold uppercase tracking-wider mb-6">
              {isFr ? 'Exclusif' : 'Exclusive'}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">
              {isFr ? 'Club Privé' : 'Private Club'}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {isFr
                ? 'Le réseau d\'entrepreneurs qui bougent. Accès privilégié, deals exclusifs et masterminds pour accélérer votre business.'
                : 'The network of entrepreneurs who make things happen. Privileged access, exclusive deals and masterminds to accelerate your business.'}
            </p>
          </div>
        </Container>
      </section>

      {/* Price Hero */}
      <Section className="bg-black">
        <Container>
          <div className="glass rounded-3xl p-8 md:p-16 border border-brand-gold/30 text-center mb-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent"></div>
            <div className="relative z-10">
              <span className="inline-block px-4 py-2 bg-brand-gold/20 text-brand-gold rounded text-sm font-bold uppercase tracking-wider mb-6">
                {isFr ? 'Abonnement Mensuel' : 'Monthly Subscription'}
              </span>
              <div className="text-6xl md:text-7xl font-serif text-brand-gold mb-2">50 €</div>
              <div className="text-gray-400 mb-8">/ {isFr ? 'mois' : 'month'}</div>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                {isFr 
                  ? 'Sans engagement. Annulez quand vous voulez. Accès immédiat à tout le réseau.'
                  : 'No commitment. Cancel anytime. Immediate access to the entire network.'}
              </p>
              <Link
                to={lp('/contact')}
                className="inline-flex items-center gap-2 px-10 py-5 premium-gradient text-black font-bold text-lg rounded-sm hover:shadow-gold transition-all"
              >
                {isFr ? 'Rejoindre le Club' : 'Join the Club'}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {benefits.map((item, index) => (
              <div key={index} className="glass rounded-xl p-6 border border-white/10 hover:border-brand-gold/30 transition-all">
                <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-white font-medium mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* What's Included */}
          <div className="glass rounded-2xl p-8 md:p-12 border border-white/10 mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl text-white mb-6">
                  {isFr ? 'Ce que vous obtenez' : 'What you get'}
                </h2>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-gold shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass rounded-xl p-6 border border-brand-gold/20">
                <h3 className="text-xl font-bold text-white mb-4">
                  {isFr ? 'Parfait pour :' : 'Perfect for:'}
                </h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                    {isFr ? 'Entrepreneurs en croissance' : 'Growing entrepreneurs'}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                    {isFr ? 'E-commerçants' : 'E-commerce sellers'}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                    {isFr ? 'Importateurs/exportateurs' : 'Importers/exporters'}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                    {isFr ? 'Digital nomads' : 'Digital nomads'}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                    {isFr ? 'Investisseurs' : 'Investors'}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="glass rounded-2xl p-8 md:p-12 border border-brand-gold/20 text-center mb-20">
            <div className="max-w-3xl mx-auto">
              <div className="text-4xl text-brand-gold mb-6">"</div>
              <p className="text-xl text-gray-300 mb-6 italic">
                {isFr
                  ? 'Le Club m\'a permis de rencontrer mon associé et de découvrir des opportunités que je n\'aurais jamais trouvées seul. Le réseau vaut largement l\'investissement.'
                  : 'The Club allowed me to meet my partner and discover opportunities I would never have found alone. The network is well worth the investment.'}
              </p>
              <div className="text-white font-medium">— Thomas, E-commerçant</div>
            </div>
          </div>

          {/* CTA */}
          <div className="glass rounded-2xl p-8 md:p-12 border border-brand-gold/20 text-center">
            <h2 className="font-serif text-3xl text-white mb-4">
              {isFr ? 'Rejoignez-nous' : 'Join us'}
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              {isFr
                ? 'Commencez dès aujourd\'hui et accédez à un réseau d\'entrepreneurs qui font bouger les choses.'
                : 'Start today and access a network of entrepreneurs who make things happen.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={lp('/contact')}
                className="inline-flex items-center gap-2 px-8 py-4 premium-gradient text-black font-semibold rounded-sm hover:shadow-gold transition-all"
              >
                {isFr ? 'Devenir membre' : 'Become a member'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={lp('/appel')}
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-sm hover:bg-white/5 transition-all"
              >
                {isFr ? 'En savoir plus' : 'Learn more'}
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
