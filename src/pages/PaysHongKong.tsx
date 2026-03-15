import { Check, Building2, FileText, Shield, TrendingUp } from 'lucide-react'

const plans = [
  {
    name: 'Essentiel',
    price: '3 000',
    description: 'Idéal pour démarrer à Hong Kong',
    features: [
      'Création de société (Limited Company)',
      'Secrétaire corporatif 1 an',
      'Adresse enregistrée 1 an',
      'Dépôt des documents légaux',
      'Business Registration Certificate',
    ],
    cta: 'Choisir Essentiel',
    featured: false,
  },
  {
    name: 'Business',
    price: '5 000',
    description: 'Pour une structure professionnelle complète',
    features: [
      'Création de société (Limited Company)',
      'Secrétaire corporatif 1 an',
      'Adresse enregistrée 1 an',
      'Dépôt des documents légaux',
      'Business Registration Certificate',
      'Ouverture compte bancaire',
      'Conseil fiscal de base',
      'Annual Return filing',
    ],
    cta: 'Choisir Business',
    featured: true,
  },
  {
    name: 'Premium',
    price: '8 000',
    description: 'Solution complète avec accompagnement VIP',
    features: [
      'Création de société (Limited Company)',
      'Secrétaire corporatif 2 ans',
      'Adresse enregistrée 2 ans',
      'Dépôt des documents légaux',
      'Business Registration Certificate',
      'Ouverture compte bancaire prioritaire',
      'Conseil fiscal avancé',
      'Annual Return filing',
      'Bureau virtuel premium',
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
    title: 'Porte vers la Chine',
    description: 'Accès privilégié au plus grand marché mondial.',
  },
  {
    icon: FileText,
    title: 'Fiscalité attractive',
    description: '8.25% sur les premiers 2M HK$ de bénéfices.',
  },
  {
    icon: Shield,
    title: 'Réputation internationale',
    description: 'Juridiction reconnue et respectée mondialement.',
  },
  {
    icon: TrendingUp,
    title: 'Libre échange',
    description: 'Aucune TVA, aucun droit de douane sur les importations.',
  },
]

export default function PaysHongKong() {
  return (
    <div className="animate-fade-in py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-6xl mb-4 block">🇭🇰</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Créer votre société à <span className="text-gradient">Hong Kong</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hong Kong est la plaque tournante commerciale de l'Asie. Avec sa fiscalité compétitive, 
            sa stabilité juridique et son accès direct à la Chine, c'est le choix idéal pour 
            les entreprises internationales.
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
            Pourquoi choisir Hong Kong ?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-slate-600">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Système juridique stable</h4>
              <p className="text-sm">
                Basé sur le Common Law britannique, Hong Kong offre un environnement juridique 
                prévisible et protecteur pour les entreprises.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Pas de TVA</h4>
              <p className="text-sm">
                Hong Kong ne prélève pas de TVA ni de taxes sur les ventes, ce qui simplifie 
                considérablement la comptabilité.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Libre circulation des capitaux</h4>
              <p className="text-sm">
                Aucune restriction sur les transferts de fonds entrants ou sortants, et 
                aucun contrôle des changes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Infrastructure bancaire</h4>
              <p className="text-sm">
                Accès à l'un des systèmes bancaires les plus sophistiqués au monde avec 
                des services multi-devises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
