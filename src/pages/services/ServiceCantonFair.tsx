import { Check, Plane, MapPin, Users, Calendar, Star, Building2, Utensils } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'Accompagnement sur place',
    description: 'Notre équipe vous guide pendant tout le salon.',
  },
  {
    icon: Users,
    title: 'Networking',
    description: 'Rencontrez des fournisseurs vérifiés.',
  },
  {
    icon: Building2,
    title: 'Visites d\'usines',
    description: 'Déplacements organisés après le salon.',
  },
  {
    icon: Utensils,
    title: 'Logistique complète',
    description: 'Hébergement et repas inclus.',
  },
]

const plans = [
  {
    name: 'Découverte',
    price: '2 500',
    description: 'Votre premier Canton Fair accompagné',
    features: [
      'Billet d\'avion A/R',
      'Hôtel 3 étoiles (5 nuits)',
      'Transferts aéroport',
      'Accompagnement 2 jours salon',
      'Guide francophone',
      'Petit-déjeuner inclus',
    ],
    cta: 'Réserver',
    featured: false,
  },
  {
    name: 'Business',
    price: '4 500',
    description: 'Expérience complète pour professionnels',
    features: [
      'Billet d\'avion A/R',
      'Hôtel 4 étoiles (7 nuits)',
      'Transferts privés',
      'Accompagnement 4 jours salon',
      'Guide francophone dédié',
      'Repas inclus',
      'Visite de 2 usines',
      'Support négociation',
    ],
    cta: 'Choisir Business',
    featured: true,
  },
  {
    name: 'VIP',
    price: '7 500',
    description: 'Expérience premium sur mesure',
    features: [
      'Billet d\'avion business A/R',
      'Hôtel 5 étoiles (10 nuits)',
      'Chauffeur privé',
      'Accompagnement illimité salon',
      'Expert sourcing dédié',
      'Tous repas inclus',
      'Visites usines illimitées',
      'Négociation avancée',
      'Dîners networking',
      'Accès Club Privé',
    ],
    cta: 'Nous contacter',
    featured: false,
  },
]

export default function ServiceCantonFair() {
  return (
    <div className="animate-fade-in py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Plane className="w-10 h-10 text-primary-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Canton Fair <span className="text-gradient">Accompagnement</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Participez au plus grand salon commercial de Chine avec notre accompagnement expert. 
            Nous gérons tout pour que vous puissiez vous concentrer sur vos affaires.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature) => (
            <div key={feature.title} className="card p-6 text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* About Canton Fair */}
        <div className="card p-8 mb-16">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Qu'est-ce que le Canton Fair ?
              </h2>
              <p className="text-slate-600 mb-4">
                Le Canton Fair (Foire de Canton) est le plus grand salon commercial de Chine, 
                se tenant deux fois par an à Guangzhou. C'est l'événement incontournable pour 
                tous les importateurs souhaitant trouver des fournisseurs fiables.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary-500" />
                  <span>Édition de printemps : Avril-Mai</span>
                </li>
                <li className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary-500" />
                  <span>Édition d'automne : Octobre-Novembre</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary-500" />
                  <span>Plus de 25 000 exposants</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary-500" />
                  <span>150 000+ visiteurs internationaux</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Pourquoi venir accompagné ?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Évitez les arnaques et les intermédiaires</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Négociez avec l'aide d'experts francophones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Visitez des usines vérifiées après le salon</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Gagnez un temps précieux grâce à l'organisation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tarifs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
            Nos <span className="text-gradient-gold">forfaits</span>
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto">
            Tout est inclus pour une expérience sans stress. Choisissez votre niveau de confort.
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
                <span className="text-slate-500"> / personne</span>
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

        {/* CTA */}
        <div className="card p-12 text-center bg-gradient-to-br from-primary-600 to-primary-800 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Prêt pour le prochain Canton Fair ?
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Les places sont limitées pour garantir un accompagnement de qualité. 
            Réservez votre place dès maintenant.
          </p>
          <button className="inline-block bg-white text-primary-700 font-semibold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors shadow-lg">
            Vérifier les disponibilités
          </button>
        </div>
      </div>
    </div>
  )
}
