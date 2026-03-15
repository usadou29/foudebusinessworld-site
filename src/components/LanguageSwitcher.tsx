import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const { lang } = useParams();

    const changeLanguage = (newLang: string) => {
        if (newLang === i18n.language) return;

        // Update i18n instance
        i18n.changeLanguage(newLang);

        // Update URL: replace current lang with new lang
        // Assumes URL structure is always /:lang/...
        const currentPath = location.pathname;
        let newPath = currentPath;

        if (lang) {
            newPath = currentPath.replace(`/${lang}`, `/${newLang}`);
        } else {
            // Fallback if not currently in a lang route (shouldn't happen with proper routing)
            newPath = `/${newLang}${currentPath}`;
        }

        navigate(newPath);
    };

    return (
        <div className="flex space-x-2">
            <button
                onClick={() => changeLanguage('fr')}
                className={`px-3 py-1 rounded border ${i18n.language === 'fr'
                        ? 'bg-brand-gold text-black border-brand-gold font-bold'
                        : 'bg-transparent text-gray-500 border-gray-300 hover:text-gray-700'
                    }`}
            >
                FR
            </button>
            <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded border ${i18n.language === 'en'
                        ? 'bg-brand-gold text-black border-brand-gold font-bold'
                        : 'bg-transparent text-gray-500 border-gray-300 hover:text-gray-700'
                    }`}
            >
                EN
            </button>
        </div>
    );
}
