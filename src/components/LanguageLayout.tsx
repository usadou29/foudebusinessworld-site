import { useEffect } from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function LanguageLayout() {
    const { lang } = useParams();
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const supportedLangs = ['fr', 'en'];

        // Validate language param
        if (lang && !supportedLangs.includes(lang)) {
            // Invalid language -> redirect to 'fr' (or detection logic could be here)
            navigate(`/fr${location.pathname.replace(`/${lang}`, '')}`, { replace: true });
            return;
        }

        // Sync i18n with URL param
        if (lang && i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }
    }, [lang, i18n, navigate, location]);

    // If we are at the root of the language layout but no language is set (unlikely due to routing)
    if (!lang) return null;

    return <Outlet />;
}
