import { Target, Users, Award, Globe } from 'lucide-react'

export default function About() {
  return (
    <div className="animate-fade-in py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            À propos de <span className="text-gradient">Fou de Business World</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Votre partenaire de confiance pour l'expansion internationale de votre entreprise
          </p>
        </div>

        {/* Mission */}
        <div className="card p-8 lg:p-12 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Target className="w-10 h-10 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Notre Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Fou de Business World accompagne les entrepreneurs et entreprises dans leur expansion internationale. 
                Nous simplifions la création de sociétés offshore, le sourcing en Chine et le développement 
                de l'e-commerce pour vous permettre de vous concentrer sur votre cœur de métier.
              </p>
            </div>
          </div>
        </div>

        {/* Valeurs */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence</h3>
            <p className="text-slate-600">
              Nous visons l'excellence dans chaque service que nous proposons, avec un souci constant de la qualité.
            </p>
          </div>

          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Accompagnement</h3>
            <p className="text-slate-600">
              Un suivi personnalisé à chaque étape de votre projet, de la création à la croissance.
            </p>
          </div>

          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">International</h3>
            <p className="text-slate-600">
              Une expertise globale pour vous ouvrir les portes des marchés internationaux.
            </p>
          </div>
        </div>

        {/* Pourquoi nous */}
        <div className="section-gradient rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Pourquoi choisir <span className="text-gradient">Fou de Business World</span> ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Expertise locale</h4>
                  <p className="text-slate-600">Des équipes sur place dans chaque pays pour un accompagnement optimal.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Solutions sur mesure</h4>
                  <p className="text-slate-600">Des services adaptés à vos besoins spécifiques et à votre secteur d'activité.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Transparence totale</h4>
                  <p className="text-slate-600">Des tarifs clairs et sans surprise, avec un suivi en temps réel de votre projet.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Support continu</h4>
                  <p className="text-slate-600">Un accompagnement après la création pour assurer votre réussite à long terme.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
