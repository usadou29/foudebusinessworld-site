import { Check, Building2, FileText, Shield, Wallet } from 'lucide-react'

const plans = [
  {
    name: 'Essentiel',
    price: '2 500',
    description: 'Solution économique pour démarrer en Géorgie',
    features: [
      'Création de société (LLC)',
      'Enregistrement auprès des autorités',
      'Obtention du numéro de TVA',
      'Documents légaux complets',
      'Support email',
    ],
    cta: 'Choisir Essentiel',
    featured: false,
  },
  {
    name: 'Business',
    price: '4 000',
    description: 'Forfait complet pour entrepreneurs',
    features: [
      'Création de société (LLC)',
      'Enregistrement auprès des autorités',
      'Obtention du numéro de TVA',
      'Documents légaux complets',
      'Support prioritaire',
      'Ouverture compte bancaire',
      'Domiciliation 1 an',
      'Conseil fiscal de base',
    ],
    cta: 'Choisir Business',
    featured: true,
  },
  {
    name: 'Premium',
    price: '6 000',
    description: 'Accompagnement VIP complet',
    features: [
      'Création de société (LLC)',
      'Enregistrement auprès des autorités',
      'Obtention du numéro de TVA',
      'Documents légaux complets',
      'Support VIP 24/7',
      'Ouverture compte bancaire prioritaire',
      'Domiciliation 2 ans',
      'Conseil fiscal avancé',
      'Résidence temporaire',
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
    title: 'Coûts réduits',
    description: 'L\'un des pays les plus abordables pour créer une société.',
  },
  {
    icon: FileText,
    title: 'Processus rapide',
    description: 'Création possible en 1-2 jours ouvrables seulement.',
  },
  {
    icon: Shield,
    title: 'Fiscalité attractive',
    description: '15% d\'impôt sur les sociétés, exonération des dividendes.',
  },
  {
    icon: Wallet,
    title: 'Pas de minimum capital',
    description: 'Créez votre société sans apport de capital initial.',
  },
]

export default function PaysGeorgie() {
  return (
    <div className="animate-fade-in py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-6xl mb-4 block">🇬🇪</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Créer votre société en <span className="text-gradient">Géorgie</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            La Géorgie est la destination montante pour les entrepreneurs. Avec ses coûts réduits, 
            sa fiscalité avantageuse et ses procédures simplifiées, elle offre une opportunité 
            unique pour créer votre entreprise en Europe.
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
            La Géorgie : une opportunité unique en Europe
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-slate-600">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Zone de libre-échange UE</h4>
              <p className="text-sm">
                La Géorgie a signé un accord de libre-échange approfondi avec l'UE, 
                permettant un accès privilégié au marché européen.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Régime fiscal des micro-entreprises</h4>
              <p className="text-sm">
                Les petites entreprises peuvent bénéficier d'un taux d'imposition de 1% 
                sur le chiffre d'affaires jusqu'à 500 000 GEL (environ 170 000 €).
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Facilité de résidence</h4>
              <p className="text-sm">
                Obtenez facilement un permis de travail et de résidence en tant que 
                propriétaire d'entreprise.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Environnement business-friendly</h4>
              <p className="text-sm">
                Classée parmi les pays les plus faciles pour faire des affaires par 
                la Banque Mondiale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
