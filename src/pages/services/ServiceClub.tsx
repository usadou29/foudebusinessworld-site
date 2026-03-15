import { Check, Users, Star, Zap, BookOpen, Video, MessageCircle, Calendar } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Communauté privée',
    description: 'Échangez avec des entrepreneurs internationaux.',
  },
  {
    icon: BookOpen,
    title: 'Formations exclusives',
    description: 'Accès à nos masterclasses et contenus premium.',
  },
  {
    icon: Video,
    title: 'Webinaires mensuels',
    description: 'Sessions live avec experts et témoignages.',
  },
  {
    icon: MessageCircle,
    title: 'Support prioritaire',
    description: 'Réponses rapides à vos questions.',
  },
]

const plans = [
  {
    name: 'Membre',
    price: '97',
    period: '/mois',
    description: 'Accès à la communauté et aux ressources de base',
    features: [
      'Accès communauté privée',
      'Formations de base',
      'Webinaires mensuels',
      'Newsletter exclusive',
      'Support communautaire',
    ],
    cta: 'Rejoindre',
    featured: false,
  },
  {
    name: 'Premium',
    price: '297',
    period: '/mois',
    description: 'Accès complet avec accompagnement',
    features: [
      'Tout du Membre',
      'Formations avancées',
      'Sessions Q&A mensuelles',
      'Templates et outils',
      'Support prioritaire',
      'Groupe WhatsApp privé',
      'Réductions services FBW',
    ],
    cta: 'Devenir Premium',
    featured: true,
  },
  {
    name: 'VIP',
    price: '997',
    period: '/mois',
    description: 'Accompagnement personnalisé intensif',
    features: [
      'Tout du Premium',
      'Coaching individuel 2h/mois',
      'Accès événements exclusifs',
      'Networking privé',
      'Assistant dédié',
      'Audit business annuel',
      'Accès fondateurs',
    ],
    cta: 'Nous contacter',
    featured: false,
  },
]

export default function ServiceClub() {
  return (
    <div className="animate-fade-in py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gold-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Star className="w-10 h-10 text-gold-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Club <span className="text-gradient-gold">Privé</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Rejoignez notre communauté exclusive d'entrepreneurs internationaux. 
            Accédez à des ressources premium, des formations et un réseau de qualité.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature) => (
            <div key={feature.title} className="card p-6 text-center">
              <div className="w-14 h-14 bg-gold-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-gold-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Tarifs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
            Rejoignez le <span className="text-gradient-gold">Club</span>
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto">
            Choisissez le niveau d'accès qui correspond à vos ambitions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`price-card p-8 ${plan.featured ? 'featured' : ''}`}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-600 text-sm mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-900">{plan.price} €</span>
                <span className="text-slate-500">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.featured
                    ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white hover:shadow-lg'
                    : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* What's Included */}
        <div className="card p-8 bg-gradient-to-br from-gold-400/10 to-primary-50">
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            Ce que vous obtenez en rejoignant le Club
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Événements exclusifs</h4>
                  <p className="text-sm text-slate-600">Rencontres physiques et virtuelles avec la communauté.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Mises à jour régulières</h4>
                  <p className="text-sm text-slate-600">Nouveaux contenus et formations ajoutés chaque mois.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Networking qualifié</h4>
                  <p className="text-sm text-slate-600">Connectez-vous avec des entrepreneurs sérieux et motivés.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Avantages exclusifs</h4>
                  <p className="text-sm text-slate-600">Réductions sur tous nos services et partenaires.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
