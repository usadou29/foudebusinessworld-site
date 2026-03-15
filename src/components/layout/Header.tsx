import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const navItems = [
    { label: 'Accueil', href: '/' },
    { 
        label: 'Services', 
        href: '/services',
        children: [
            { label: 'Création société', href: '/services/company' },
            { label: 'Sourcing Chine', href: '/services/sourcing' },
            { label: 'Canton Fair', href: '/services/canton' },
            { label: 'E-commerce', href: '/services/ecommerce' },
        ]
    },
    { label: 'Pays', href: '/countries' },
    { label: 'Formations', href: '/courses' },
    { label: 'Pourquoi nous', href: '/why-us' },
    { label: 'Contact', href: '/contact' },
];

export default function Header() {
    const { i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'fr' ? 'en' : 'fr';
        i18n.changeLanguage(newLang);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled ? 'nav-blur border-b border-white/5' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <img
                            src="/assets/logo.png"
                            alt="FouDeBusinessWorld"
                            className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
                        />
                        <span className="hidden lg:block text-lg font-serif font-semibold text-white group-hover:text-brand-gold transition-colors">
                            FouDeBusinessWorld
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={item.href}
                                    className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors rounded-sm hover:bg-white/5"
                                >
                                    <span className="flex items-center gap-1">
                                        {item.label}
                                        {item.children && <ChevronDown className="w-3 h-3" />}
                                    </span>
                                </Link>

                                {/* Dropdown */}
                                {item.children && activeDropdown === item.label && (
                                    <div className="absolute top-full left-0 mt-1 w-56 glass-dark rounded-lg overflow-hidden shadow-xl animate-scale-in">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                to={child.href}
                                                className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        {/* Language Switcher */}
                        <button
                            onClick={toggleLanguage}
                            className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm text-white/60 hover:text-white transition-colors"
                        >
                            <Globe className="w-4 h-4" />
                            <span className="uppercase">{i18n.language}</span>
                        </button>

                        {/* CTA Button */}
                        <Link
                            to="/contact"
                            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 premium-gradient text-black text-sm font-semibold rounded-sm hover:shadow-gold transition-all"
                        >
                            Réserver un appel
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-white hover:text-brand-gold transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden nav-blur border-t border-white/10">
                    <div className="px-4 py-6 space-y-2">
                        {navItems.map((item) => (
                            <div key={item.label}>
                                <Link
                                    to={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-sm transition-colors"
                                >
                                    {item.label}
                                </Link>
                                {item.children && (
                                    <div className="pl-4 space-y-1">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                to={child.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-4 border-t border-white/10">
                            <Link
                                to="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-center px-4 py-3 premium-gradient text-black font-semibold rounded-sm"
                            >
                                Réserver un appel stratégique
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
