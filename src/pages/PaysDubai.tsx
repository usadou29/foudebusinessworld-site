import { Check, Building2, FileText, Shield, Plane } from 'lucide-react'

const plans = [
  {
    name: 'Essentiel',
    price: '3 500',
    description: 'Parfait pour démarrer votre activité à Dubaï',
    features: [
      'Création de société (license commerciale)',
      'Obtenir 1 visa investisseur',
      'Etablissement de la résidence',
      'Ouverture compte bancaire',
      'Accompagnement de base',
    ],
    cta: 'Choisir Essentiel',
    featured: false,
  },
  {
    name: 'Business',
    price: '6 000',
    description: 'Pour une structure plus importante',
    features: [
      'Création de société (license commerciale)',
      'Obtenir 2 visas investisseurs',
      'Etablissement de la résidence',
      'Ouverture compte bancaire',
      'Accompagnement prioritaire',
      'Bureau virtuel 1 an',
      'Conseil fiscal de base',
    ],
    cta: 'Choisir Business',
    featured: true,
  },
  {
    name: 'Premium',
    price: '9 000',
    description: 'Solution complète pour entrepreneurs exigeants',
    features: [
      'Création de société (license commerciale)',
      'Obtenir 3 visas investisseurs',
      'Etablissement de la résidence',
      'Ouverture compte bancaire',
      'Accompagnement VIP',
      'Bureau physique 1 an',
      'Conseil fiscal avancé',
      'Assistant dédié',
      'Accès au Club Privé',
    ],
    cta: 'Choisir Premium',
    featured: false,
  },
]

const advantages = [
  {
    icon: Building2,
    title: '0% impôt sur les sociétés',
    description: 'Bénéficiez d\'une fiscalité très attractive pour votre entreprise.',
  },
  {
    icon: FileText,
    title: '100% repatriation des bénéfices',
    description: 'Transférez vos profits sans restriction vers la France ou ailleurs.',
  },
  {
    icon: Shield,
    title: 'Stabilité politique',
    description: 'Un environnement sécurisé et stable pour votre investissement.',
  },
  {
    icon: Plane,
    title: 'Hub international',
    description: 'Accès facile aux marchés d\'Asie, d\'Afrique et du Moyen-Orient.',
  },
]

export default function PaysDubai() {
  return (
    <div className="animate-fade-in py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-6xl mb-4 block">🇦🇪</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Créer votre société à <span className="text-gradient">Dubaï</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Dubaï offre l'un des environnements commerciaux les plus attractifs au monde avec 
            0% d'impôt sur les sociétés, une infrastructure moderne et un accès privilégié aux marchés mondiaux.
          </p>
        </div>

        {/* Avantages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {advantages.map((advantage) => (
            <div key={advantage.title} className="card p-6 text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <advantage.icon className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{advantage.title}</h3>
              <p className="text-sm text-slate-600">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Tarifs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">
            Nos <span className="text-gradient-gold">forfaits</span>
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto">
            Choisissez le forfait qui correspond à vos besoins. Tous nos prix sont en euros et 
            incluent les frais administratifs de base.
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

        {/* Info complémentaire */}
        <div className="card p-8 bg-gradient-to-br from-primary-50 to-white">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Ce qui est inclus dans tous nos forfaits
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-slate-600">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary-500" />
                <span>Enregistrement de la société auprès des autorités</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary-500" />
                <span>Documents légaux (MOA, certificat d'incorporation)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary-500" />
                <span>Tampon de l'entreprise</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary-500" />
                <span>Assistance pour la domiciliation</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary-500" />
                <span>Support par email et téléphone</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary-500" />
                <span>Garantie satisfaction 30 jours</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
