import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';
import { PlayCircle } from 'lucide-react';

export default function DashboardHome() {
    const { t } = useTranslation('common');
    useAuth(); // Ensure user is authenticated

    return (
        <div>
            <h1 className="text-3xl font-serif text-white mb-2">{t('home.welcome') || 'Bonjour'},</h1>
            <p className="text-gray-400 mb-8">{t('home.hero.subtitle')}</p>

            {/* Stats / Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-brand-surface border border-white/10 p-6 rounded-xl">
                    <h3 className="text-gray-400 text-sm uppercase font-bold mb-2">{t('courses.all_courses')}</h3>
                    <p className="text-3xl text-white font-bold">0</p>
                </div>
                <div className="bg-brand-surface border border-white/10 p-6 rounded-xl">
                    <h3 className="text-gray-400 text-sm uppercase font-bold mb-2">{t('courses.progress', { percentage: 0 })}</h3>
                    <p className="text-3xl text-brand-gold font-bold">0%</p>
                </div>
                <div className="bg-brand-surface border border-white/10 p-6 rounded-xl">
                    <h3 className="text-gray-400 text-sm uppercase font-bold mb-2">Certificats</h3>
                    <p className="text-3xl text-white font-bold">0</p>
                </div>
            </div>

            {/* Recent Activity / Empty State */}
            <div className="bg-brand-surface border border-white/10 rounded-xl p-8 text-center py-16">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                    <PlayCircle className="text-gray-500" size={32} />
                </div>
                <h2 className="text-xl text-white font-bold mb-2">{t('courses.no_courses')}</h2>
                <p className="text-gray-400 mb-6 max-w-sm mx-auto">
                    {t('courses.search_placeholder')}
                </p>
                <a href="programs" className="inline-flex h-10 items-center justify-center rounded-md bg-brand-gold px-8 text-sm font-medium text-black transition-colors hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-slate-900 duration-300 uppercase tracking-wide">
                    {t('programs_page.cta')}
                </a>
            </div>
        </div>
    );
}
