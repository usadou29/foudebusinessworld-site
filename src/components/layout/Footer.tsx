import { Link } from 'react-router-dom';
import { 
    Mail, 
    Phone, 
    MapPin, 
    Instagram, 
    Linkedin, 
    Youtube,
    ArrowRight
} from 'lucide-react';

const footerLinks = {
    services: [
        { label: 'Création société', href: '/services/company' },
        { label: 'Sourcing Chine', href: '/services/sourcing' },
        { label: 'Canton Fair', href: '/services/canton' },
        { label: 'E-commerce', href: '/services/ecommerce' },
        { label: 'Formations', href: '/courses' },
    ],
    countries: [
        { label: 'Dubaï', href: '/countries/dubai' },
        { label: 'Hong Kong', href: '/countries/hong-kong' },
        { label: 'Géorgie', href: '/countries/georgia' },
        { label: 'Tous les pays', href: '/countries' },
    ],
    company: [
        { label: 'À propos', href: '/about' },
        { label: 'Pourquoi nous', href: '/why-us' },
        { label: 'Blog', href: '/resources' },
        { label: 'Contact', href: '/contact' },
    ],
    legal: [
        { label: 'Mentions légales', href: '/legal' },
        { label: 'Politique de confidentialité', href: '/privacy' },
        { label: 'CGV', href: '/terms' },
    ]
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-darker border-t border-white/5">
            {/* Newsletter Section */}
            <div className="border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4">
                                Recevez nos meilleures opportunités
                            </h3>
                            <p className="text-gray-400">
                                Inscrivez-vous à notre newsletter et soyez toujours en avance sur les autres entrepreneurs.
                            </p>
                        </div>
                        <form className="flex gap-4">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold/50 transition-colors"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 premium-gradient text-black font-semibold rounded-sm hover:shadow-gold transition-all flex items-center gap-2"
                            >
                                S'inscrire
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-1">
                        <Link to="/" className="flex items-center gap-3 mb-6">
                            <img
                                src="/assets/logo.png"
                                alt="FouDeBusinessWorld"
                                className="h-10 w-auto"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            Votre partenaire privilégié pour créer et développer votre business à l'international.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {[
                                { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
                                { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
                                { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-black transition-all"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Countries */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Pays</h4>
                        <ul className="space-y-3">
                            {footerLinks.countries.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Entreprise</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-400 hover:text-brand-gold transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <Mail className="w-4 h-4 mt-0.5 text-brand-gold" />
                                <span>contact@foudebusinessworld.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <Phone className="w-4 h-4 mt-0.5 text-brand-gold" />
                                <span>+33 1 23 45 67 89</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin className="w-4 h-4 mt-0.5 text-brand-gold" />
                                <span>Dubaï, Émirats Arabes Unis</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-500 text-sm">
                            © {currentYear} FouDeBusinessWorld. Tous droits réservés.
                        </p>
                        <div className="flex items-center gap-6">
                            {footerLinks.legal.map((link, idx) => (
                                <Link
                                    key={idx}
                                    to={link.href}
                                    className="text-gray-500 hover:text-gray-400 transition-colors text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
