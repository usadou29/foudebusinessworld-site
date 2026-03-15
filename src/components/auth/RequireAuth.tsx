import { Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';

export default function RequireAuth({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth();
    const location = useLocation();

    const { i18n } = useTranslation();
    const lang = i18n.language || 'fr';

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!user) {
        // Redirect to login but save the attempted location
        return <Navigate to={`/${lang}/login`} state={{ from: location }} replace />;
    }

    return <>{children}</>;
}
