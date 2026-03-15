import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Globe2, ShoppingCart, Users, Plane } from 'lucide-react'

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero-bg py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Créez votre{' '}
              <span className="text-gradient">société offshore</span>{' '}
              et optimisez votre fiscalité
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Fou de Business World vous accompagne dans la création de votre entreprise à l'étranger, 
              le sourcing en Chine et le développement de votre e-commerce international.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/fr/contact" className="btn-primary text-lg inline-flex items-center justify-center space-x-2">
                <span>Commencer maintenant</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/fr/services/creation-societe" className="btn-gold text-lg inline-flex items-center justify-center">
                Découvrir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Nos <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Des solutions complètes pour votre expansion internationale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Link to="/fr/services/creation-societe" className="card p-8 group">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                <Building2 className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Création de société</h3>
              <p className="text-slate-600 mb-4">
                Créez votre entreprise à Dubaï, Hong Kong ou en Géorgie avec un accompagnement complet.
              </p>
              <span className="text-primary-600 font-medium inline-flex items-center">
                En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>

            {/* Service 2 */}
            <Link to="/fr/services/sourcing-chine" className="card p-8 group">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                <Globe2 className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sourcing Chine</h3>
              <p className="text-slate-600 mb-4">
                Trouvez les meilleurs fournisseurs en Chine et importez vos produits en toute confiance.
              </p>
              <span className="text-primary-600 font-medium inline-flex items-center">
                En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>

            {/* Service 3 */}
            <Link to="/fr/services/ecommerce" className="card p-8 group">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                <ShoppingCart className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">E-commerce</h3>
              <p className="text-slate-600 mb-4">
                Lancez votre boutique en ligne et vendez vos produits dans le monde entier.
              </p>
              <span className="text-primary-600 font-medium inline-flex items-center">
                En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>

            {/* Service 4 */}
            <Link to="/fr/services/club" className="card p-8 group">
              <div className="w-14 h-14 bg-gold-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-400/30 transition-colors">
                <Users className="w-7 h-7 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Club Privé</h3>
              <p className="text-slate-600 mb-4">
                Rejoignez notre communauté d'entrepreneurs et accédez à des ressources exclusives.
              </p>
              <span className="text-primary-600 font-medium inline-flex items-center">
                En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>

            {/* Service 5 */}
            <Link to="/fr/services/canton-fair" className="card p-8 group">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                <Plane className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Canton Fair</h3>
              <p className="text-slate-600 mb-4">
                Participez au plus grand salon commercial de Chine avec notre accompagnement sur place.
              </p>
              <span className="text-primary-600 font-medium inline-flex items-center">
                En savoir plus <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Pays Section */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Nos <span className="text-gradient-gold">Destinations</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choisissez la juridiction qui correspond le mieux à votre activité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Dubai */}
            <Link to="/fr/pays/dubai" className="card overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <span className="text-6xl">🇦🇪</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Dubaï</h3>
                <p className="text-slate-600 mb-4">
                  Zéro impôt sur les sociétés, infrastructure moderne et accès aux marchés mondiaux.
                </p>
                <span className="text-primary-600 font-medium inline-flex items-center">
                  Découvrir <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </div>
            </Link>

            {/* Hong Kong */}
            <Link to="/fr/pays/hong-kong" className="card overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <span className="text-6xl">🇭🇰</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Hong Kong</h3>
                <p className="text-slate-600 mb-4">
                  Porte d'entrée vers la Chine, fiscalité attractive et stabilité économique.
                </p>
                <span className="text-primary-600 font-medium inline-flex items-center">
                  Découvrir <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </div>
            </Link>

            {/* Georgie */}
            <Link to="/fr/pays/georgie" className="card overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <span className="text-6xl">🇬🇪</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Géorgie</h3>
                <p className="text-slate-600 mb-4">
                  Coûts réduits, fiscalité favorable et processus simplifié pour entrepreneurs.
                </p>
                <span className="text-primary-600 font-medium inline-flex items-center">
                  Découvrir <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Prêt à internationaliser votre activité ?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons vous aider.
          </p>
          <Link to="/fr/contact" className="inline-block bg-white text-primary-700 font-semibold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors shadow-lg">
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </div>
  )
}
