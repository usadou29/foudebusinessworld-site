import { Link, useParams } from 'react-router-dom';
import Section from '../../components/ui/Section';
import Container from '../../components/ui/Container';
import SEOHead from '../../components/SEOHead';
import { Calendar, Users, Plane, Hotel, CheckCircle, ArrowRight, MapPin, Star } from 'lucide-react';

export default function ServiceCantonFair() {
  const { lang } = useParams();
  const currentLang = lang || 'fr';
  const lp = (path: string) => `/${currentLang}${path}`;
  const isFr = currentLang === 'fr';

  const features = isFr ? [
    'Accompagnement sur place à Canton',
    'Programme personnalisé selon votre secteur',
    'Introduction aux fournisseurs clés',
    'Négociation en direct avec interprète',
    'Vérification des usines visitées',
    'Rapport complet post-salon'
  ] : [
    'On-site support in Canton',
    'Personalized program by sector',
    'Introduction to key suppliers',
    'Direct negotiation with interpreter',
    'Verification of visited factories',
    'Complete post-fair report'
  ];

  const programme = isFr ? [
    { day: 'Jour 1', title: 'Arrivée & Briefing', desc: 'Accueil à l\'aéroport, briefing stratégique et préparation des meetings' },
    { day: 'Jour 2-4', title: 'Canton Fair', desc: 'Visite du salon avec accompagnement, rencontres fournisseurs pré-sélectionnés' },
    { day: 'Jour 5', title: 'Visites d\'usines', desc: 'Audit sur place des usines retenues, négociation finale' },
    { day: 'Jour 6', title: 'Débriefing', desc: 'Analyse des opportunités, plan d\'action, départ' }
  ] : [
    { day: 'Day 1', title: 'Arrival & Briefing', desc: 'Airport pickup, strategic briefing and meeting preparation' },
    { day: 'Day 2-4', title: 'Canton Fair', desc: 'Fair visit with support, pre-selected supplier meetings' },
    { day: 'Day 5', title: 'Factory Visits', desc: 'On-site audit of selected factories, final negotiation' },
    { day: 'Day 6', title: 'Debriefing', desc: 'Opportunity analysis, action plan, departure' }
  ];

  const includes = isFr ? [
    'Accompagnement expert 6 jours',
    'Interprète chinois-français',
    'Transport sur place',
    'Hôtel 4* en centre-ville',
    'Pré-sélection fournisseurs',
    'Rapport complet post-mission'
  ] : [
    '6-day expert support',
    'Chinese-French interpreter',
    'Local transport',
    '4* hotel downtown',
    'Supplier pre-selection',
    'Complete post-mission report'
  ];

  return (
    <>
      <SEOHead
        title={isFr ? "Canton Fair | FouDeBusinessWorld" : "Canton Fair | FouDeBusinessWorld"}
        description={isFr
          ? "Vivez le plus grand salon commercial du monde accompagné. 6 jours pour transformer votre business."
          : "Experience the world\'s largest trade fair accompanied. 6 days to transform your business."}
      />

      {/* Hero */}
      <section className="section-hero relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-black"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 text-brand-gold rounded text-sm font-bold uppercase tracking-wider mb-6">
              {isFr ? 'Mission Exclusive' : 'Exclusive Mission'}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">
              Canton Fair
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {isFr
                ? 'Le plus grand salon commercial du monde. 6 jours accompagnés pour trouver vos fournisseurs et négocier vos contrats.'
                : 'The world\'s largest trade fair. 6 accompanied days to find your suppliers and negotiate your contracts.'}
            </p>
            <div className="flex items-center justify-center gap-8 text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-gold" />
                {isFr ? '6 jours' : '6 days'}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-gold" />
                Guangzhou, Chine
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-5 h-5 text-brand-gold" />
                {isFr ? 'Petit groupe' : 'Small group'}
              </span>
            </div>
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
                {isFr ? 'Prix Mission' : 'Mission Price'}
              </span>
              <div className="text-6xl md:text-7xl font-serif text-brand-gold mb-4">10 000 €</div>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                {isFr 
                  ? 'Tout inclus sauf vols internationaux. Repartez avec des fournisseurs validés et des contrats négociés.'
                  : 'All inclusive except international flights. Leave with validated suppliers and negotiated contracts.'}
              </p>
              <Link
                to={lp('/contact')}
                className="inline-flex items-center gap-2 px-10 py-5 premium-gradient text-black font-bold text-lg rounded-sm hover:shadow-gold transition-all"
              >
                {isFr ? 'Réserver ma place' : 'Book my spot'}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Plane, title: isFr ? 'Accompagnement' : 'Support', desc: isFr ? 'Expert avec vous 6 jours' : 'Expert with you 6 days' },
              { icon: Users, title: isFr ? 'Interprète' : 'Interpreter', desc: isFr ? 'Chinois-Français dédié' : 'Dedicated Chinese-French' },
              { icon: Hotel, title: isFr ? 'Hébergement' : 'Accommodation', desc: isFr ? 'Hôtel 4* centre-ville' : '4* downtown hotel' },
              { icon: Calendar, title: isFr ? 'Programme' : 'Program', desc: isFr ? 'Sur mesure par secteur' : 'Customized by sector' },
              { icon: MapPin, title: isFr ? 'Logistique' : 'Logistics', desc: isFr ? 'Transport inclus' : 'Transport included' },
              { icon: CheckCircle, title: isFr ? 'Résultats' : 'Results', desc: isFr ? 'Fournisseurs validés' : 'Validated suppliers' }
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

          {/* Programme */}
          <div className="mb-20">
            <h2 className="font-serif text-4xl text-white mb-12 text-center">
              {isFr ? 'Programme de la Mission' : 'Mission Program'}
            </h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {programme.map((day, index) => (
                <div key={index} className="glass rounded-xl p-6 border border-white/10 flex gap-6">
                  <div className="w-20 shrink-0">
                    <span className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold text-sm font-bold rounded">
                      {day.day}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{day.title}</h3>
                    <p className="text-gray-400">{day.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Includes */}
          <div className="glass rounded-2xl p-8 md:p-12 border border-white/10 mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl text-white mb-6">
                  {isFr ? 'Ce qui est inclus' : 'What\'s included'}
                </h2>
                <p className="text-gray-400 mb-8">
                  {isFr
                    ? 'Une mission clé en main pour maximiser votre temps et vos résultats au Canton Fair.'
                    : 'A turnkey mission to maximize your time and results at the Canton Fair.'}
                </p>
                <Link
                  to={lp('/appel')}
                  className="inline-flex items-center gap-2 px-8 py-4 premium-gradient text-black font-semibold rounded-sm hover:shadow-gold transition-all"
                >
                  {isFr ? 'En savoir plus' : 'Learn more'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-brand-gold shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="glass rounded-2xl p-8 md:p-12 border border-brand-gold/20 text-center">
            <h2 className="font-serif text-3xl text-white mb-4">
              {isFr ? 'Prochaines sessions' : 'Next sessions'}
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              {isFr
                ? 'Le Canton Fair a lieu 2 fois par an. Réservez votre place pour la prochaine édition.'
                : 'The Canton Fair takes place twice a year. Book your spot for the next edition.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={lp('/contact')}
                className="inline-flex items-center gap-2 px-8 py-4 premium-gradient text-black font-semibold rounded-sm hover:shadow-gold transition-all"
              >
                {isFr ? 'Réserver maintenant' : 'Book now'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={lp('/appel')}
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-sm hover:bg-white/5 transition-all"
              >
                {isFr ? 'Appel d\'information' : 'Info call'}
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
