import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Globe, Menu, X } from 'lucide-react'

const pays = [
  { name: 'Dubaï', path: '/fr/pays/dubai' },
  { name: 'Hong Kong', path: '/fr/pays/hong-kong' },
  { name: 'Géorgie', path: '/fr/pays/georgie' },
]

const services = [
  { name: 'Création de société', path: '/fr/services/creation-societe' },
  { name: 'Sourcing Chine', path: '/fr/services/sourcing-chine' },
  { name: 'E-commerce', path: '/fr/services/ecommerce' },
  { name: 'Club Privé', path: '/fr/services/club' },
  { name: 'Canton Fair', path: '/fr/services/canton-fair' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [paysDropdownOpen, setPaysDropdownOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/fr" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient hidden sm:block">
              Fou de Business World
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/fr"
              className={`nav-link ${isActive('/fr') ? 'text-primary-600' : ''}`}
            >
              Accueil
            </Link>

            {/* Pays Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPaysDropdownOpen(true)}
              onMouseLeave={() => setPaysDropdownOpen(false)}
            >
              <button className="nav-link flex items-center space-x-1">
                <span>Pays</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${paysDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {paysDropdownOpen && (
                <div className="dropdown-menu absolute top-full left-0 mt-2 py-2 w-48 animate-fade-in">
                  {pays.map((pay) => (
                    <Link
                      key={pay.path}
                      to={pay.path}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    >
                      {pay.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="nav-link flex items-center space-x-1">
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesDropdownOpen && (
                <div className="dropdown-menu absolute top-full left-0 mt-2 py-2 w-56 animate-fade-in">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/fr/a-propos"
              className={`nav-link ${isActive('/fr/a-propos') ? 'text-primary-600' : ''}`}
            >
              À propos
            </Link>

            <Link
              to="/fr/contact"
              className="btn-primary text-sm"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/fr"
                className="px-4 py-2 text-slate-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Accueil
              </Link>

              {/* Mobile Pays */}
              <div className="px-4 py-2">
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Pays</span>
                <div className="mt-2 ml-4 space-y-1">
                  {pays.map((pay) => (
                    <Link
                      key={pay.path}
                      to={pay.path}
                      className="block py-1 text-slate-700 hover:text-primary-600 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {pay.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Services */}
              <div className="px-4 py-2">
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Services</span>
                <div className="mt-2 ml-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block py-1 text-slate-700 hover:text-primary-600 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/fr/a-propos"
                className="px-4 py-2 text-slate-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                À propos
              </Link>

              <Link
                to="/fr/contact"
                className="mx-4 btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
