import { Building2, Globe, FileText, Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  {
    icon: Globe,
    title: 'Juridictions multiples',
    description: 'Dubaï, Hong Kong, Géorgie et plus encore.',
  },
  {
    icon: FileText,
    title: 'Documents complets',
    description: 'Tous les documents légaux préparés et déposés.',
  },
  {
    icon: Users,
    title: 'Accompagnement dédié',
    description: 'Un expert vous guide à chaque étape.',
  },
  {
    icon: Building2,
    title: 'Domiciliation',
    description: 'Adresse professionnelle incluse.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Nous analysons vos besoins et vous recommandons la meilleure juridiction.',
  },
  {
    number: '02',
    title: 'Préparation',
    description: 'Nous préparons tous les documents nécessaires et vérifions la disponibilité du nom.',
  },
  {
    number: '03',
    title: 'Enregistrement',
    description: 'Nous déposons votre dossier auprès des autorités compétentes.',
  },
  {
    number: '04',
    title: 'Finalisation',
    description: 'Vous recevez vos documents et pouvez commencer votre activité.',
  },
]

const destinations = [
  {
    flag: '🇦🇪',
    name: 'Dubaï',
    price: 'à partir de 3 500 €',
    path: '/fr/pays/dubai',
  },
  {
    flag: '🇭🇰',
    name: 'Hong Kong',
    price: 'à partir de 3 000 €',
    path: '/fr/pays/hong-kong',
  },
  {
    flag: '🇬🇪',
    name: 'Géorgie',
    price: 'à partir de 2 500 €',
    path: '/fr/pays/georgie',
  },
]

export default function ServiceCreationSociete() {
  return (
    <div className="animate-fade-in py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Building2 className="w-10 h-10 text-primary-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Création de <span className="text-gradient">société offshore</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Nous vous accompagnons dans la création de votre entreprise à l'étranger. 
            Profitez d'une fiscalité optimisée et d'une structure internationale solide.
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

        {/* Destinations */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Nos <span className="text-gradient-gold">destinations</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <Link
                key={dest.name}
                to={dest.path}
                className="card p-8 text-center group hover:border-primary-300 transition-all"
              >
                <span className="text-5xl mb-4 block">{dest.flag}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{dest.name}</h3>
                <p className="text-slate-600 mb-4">{dest.price}</p>
                <span className="text-primary-600 font-medium inline-flex items-center group-hover:gap-2 transition-all">
                  Voir les détails <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Notre <span className="text-gradient">processus</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="card p-6 h-full">
                  <span className="text-4xl font-bold text-primary-200">{step.number}</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="card p-12 text-center bg-gradient-to-br from-primary-600 to-primary-800 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à créer votre société ?
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour une consultation gratuite et découvrez quelle juridiction 
            correspond le mieux à votre activité.
          </p>
          <Link
            to="/fr/contact"
            className="inline-block bg-white text-primary-700 font-semibold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors shadow-lg"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </div>
    </div>
  )
}
