import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import {
    LayoutDashboard,
    GraduationCap,
    Settings,
    LogOut,
    Menu,
    X,
    User
} from 'lucide-react';

export default function DashboardLayout() {
    const { t, i18n } = useTranslation('common');
    const { signOut, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const lang = i18n.language || 'fr';

    const handleSignOut = async () => {
        await signOut();
        navigate(`/${lang}/login`);
    };

    const navItems = [
        { label: t('menu.dashboard') || 'Tableau de bord', path: `/${lang}/dashboard`, icon: <LayoutDashboard size={20} /> },
        { label: t('menu.programs') || 'Mes Formations', path: `/${lang}/dashboard/courses`, icon: <GraduationCap size={20} /> },
        { label: t('menu.settings') || 'Profil & Paramètres', path: `/${lang}/dashboard/settings`, icon: <Settings size={20} /> },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="min-h-screen bg-brand-dark flex">
            {/* Sidebar (Desktop) */}
            <aside className="hidden md:flex flex-col w-64 bg-black border-r border-white/10 fixed h-full z-20">
                <div className="p-6 border-b border-white/10">
                    <Link to={`/${lang}`} className="text-xl font-bold font-serif text-white tracking-widest">
                        FOU DE <span className="text-brand-gold">BUSINESS</span>
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive(item.path)
                                ? 'bg-brand-gold/10 text-brand-gold border border-brand-gold/20'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <div className="flex items-center gap-3 px-4 py-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-brand-surface border border-white/10 flex items-center justify-center text-brand-gold">
                            <User size={16} />
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm text-white truncate font-medium">{user?.email}</p>
                        </div>
                    </div>
                    <button
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-3 px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors text-sm"
                    >
                        <LogOut size={18} />
                        {t('menu.logout') || 'Déconnexion'}
                    </button>
                </div>
            </aside>

            {/* Mobile Drawer */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
                    <div className="absolute left-0 top-0 bottom-0 w-3/4 bg-black border-r border-white/10 p-6">
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-xl font-bold font-serif text-white">MENU</span>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                                <X size={24} />
                            </button>
                        </div>
                        <nav className="space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive(item.path)
                                        ? 'bg-brand-gold/10 text-brand-gold border border-brand-gold/20'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {item.icon}
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            ))}
                            <button
                                onClick={handleSignOut}
                                className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                            >
                                <LogOut size={20} />
                                {t('menu.logout') || 'Déconnexion'}
                            </button>
                        </nav>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
                {/* Topbar (Mobile) */}
                <div className="md:hidden h-16 bg-black border-b border-white/10 flex items-center justify-between px-4 sticky top-0 z-10">
                    <Link to="/" className="text-lg font-bold font-serif text-white">
                        FOU DE <span className="text-brand-gold">BUSINESS</span>
                    </Link>
                    <button onClick={() => setIsMobileMenuOpen(true)} className="text-white">
                        <Menu size={24} />
                    </button>
                </div>

                {/* Page Content */}
                <div className="p-6 md:p-12 max-w-7xl mx-auto w-full">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
