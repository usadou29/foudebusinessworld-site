import { Check, ShoppingCart, Globe, Zap, BarChart3, Headphones, Truck } from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Sites internationaux',
    description: 'Création de boutiques multi-langues et multi-devises.',
  },
  {
    icon: Zap,
    title: 'Optimisation conversion',
    description: 'Design et UX optimisés pour maximiser vos ventes.',
  },
  {
    icon: BarChart3,
    title: 'Analytics avancés',
    description: 'Suivi complet de vos performances en temps réel.',
  },
  {
    icon: Truck,
    title: 'Logistique intégrée',
    description: 'Connexion avec vos fournisseurs et transporteurs.',
  },
]

const plans = [
  {
    name: 'Starter',
    price: '2 500',
    description: 'Pour lancer votre première boutique',
    features: [
      'Site e-commerce complet',
      'Jusqu\'à 100 produits',
      'Design responsive',
      'Paiement intégré',
      'Formation de base',
      'Support 1 mois',
    ],
    cta: 'Commencer',
    featured: false,
  },
  {
    name: 'Business',
    price: '5 000',
    description: 'Solution complète pour vendre à l\'international',
    features: [
      'Site e-commerce premium',
      'Produits illimités',
      'Design sur mesure',
      'Multi-devises',
      'Multi-langues (3)',
      'SEO optimisé',
      'Analytics avancé',
      'Support 3 mois',
    ],
    cta: 'Choisir Business',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '10 000',
    description: 'Solution sur mesure pour grandes structures',
    features: [
      'Plateforme e-commerce sur mesure',
      'Produits illimités',
      'Design premium unique',
      'Multi-devises avancé',
      'Langues illimitées',
      'SEO expert',
      'Analytics personnalisé',
      'Intégrations API',
      'Support 6 mois',
      'Assistant dédié',
    ],
    cta: 'Nous contacter',
    featured: false,
  },
]

export default function ServiceEcommerce() {
  return (
    <div className="animate-fade-in py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="w-10 h-10 text-primary-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            E-commerce <span className="text-gradient">International</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Lancez votre boutique en ligne et vendez vos produits dans le monde entier. 
            Nous créons des sites e-commerce performants et optimisés pour la conversion.
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

        {/* Tarifs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
            Nos <span className="text-gradient-gold">forfaits</span>
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto">
            Des solutions adaptées à chaque étape de votre croissance e-commerce.
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
                <span className="text-slate-500"> TTC</span>
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

        {/* Additional Services */}
        <div className="card p-8 bg-gradient-to-br from-primary-50 to-white">
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            Services complémentaires
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Headphones className="w-6 h-6 text-primary-600 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-900">Support technique</h4>
                <p className="text-sm text-slate-600">Maintenance et mises à jour de votre site.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BarChart3 className="w-6 h-6 text-primary-600 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-900">Marketing digital</h4>
                <p className="text-sm text-slate-600">SEO, SEA et stratégie social media.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Truck className="w-6 h-6 text-primary-600 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-900">Logistique</h4>
                <p className="text-sm text-slate-600">Intégration transporteurs et fulfilment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
