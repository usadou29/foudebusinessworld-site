import { Check, Factory, Search, Package, FileCheck } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Recherche de fournisseurs',
    description: 'Identification et vérification des meilleurs fabricants.',
  },
  {
    icon: Factory,
    title: 'Audit d\'usine',
    description: 'Visite sur place et contrôle qualité des installations.',
  },
  {
    icon: Package,
    title: 'Gestion des échantillons',
    description: 'Réception, inspection et envoi des échantillons.',
  },
  {
    icon: FileCheck,
    title: 'Contrôle qualité',
    description: 'Inspection avant expédition garantie.',
  },
]

const plans = [
  {
    name: 'Découverte',
    price: '1 500',
    description: 'Pour vos premiers pas en Chine',
    features: [
      'Recherche de 3 fournisseurs',
      'Rapport de vérification de base',
      'Négociation des prix',
      'Support email',
    ],
    cta: 'Commencer',
    featured: false,
  },
  {
    name: 'Business',
    price: '3 500',
    description: 'Solution complète pour importateurs',
    features: [
      'Recherche de 5 fournisseurs',
      'Audit d\'usine sur place',
      'Négociation avancée',
      'Gestion des échantillons',
      'Contrôle qualité',
      'Support prioritaire',
    ],
    cta: 'Choisir Business',
    featured: true,
  },
  {
    name: 'Premium',
    price: '6 000',
    description: 'Accompagnement VIP complet',
    features: [
      'Recherche illimitée de fournisseurs',
      'Audit d\'usine détaillé',
      'Négociation stratégique',
      'Gestion complète échantillons',
      'Contrôle qualité renforcé',
      'Accompagnement Canton Fair',
      'Assistant dédié',
      'Accès au Club Privé',
    ],
    cta: 'Choisir Premium',
    featured: false,
  },
]

export default function ServiceSourcingChine() {
  return (
    <div className="animate-fade-in py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Factory className="w-10 h-10 text-primary-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Sourcing en <span className="text-gradient">Chine</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Trouvez les meilleurs fournisseurs en Chine avec notre accompagnement sur place. 
            Nous vérifions, négocions et contrôlons la qualité pour vous.
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
            Choisissez le niveau d'accompagnement qui correspond à vos besoins.
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
                <span className="text-slate-500"> / projet</span>
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

        {/* Process */}
        <div className="card p-8 bg-gradient-to-br from-primary-50 to-white">
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            Notre processus de sourcing
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Analyse besoins</h4>
                <p className="text-sm text-slate-600">Définition de vos critères produit et fournisseur.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Recherche</h4>
                <p className="text-sm text-slate-600">Identification et présélection des fournisseurs.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Vérification</h4>
                <p className="text-sm text-slate-600">Audit, échantillons et négociation.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Production</h4>
                <p className="text-sm text-slate-600">Suivi et contrôle qualité avant expédition.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
