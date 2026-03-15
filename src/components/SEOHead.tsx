import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOHeadProps {
    titleKey?: string;
    descriptionKey?: string;
    title?: string;
    description?: string;
}

export default function SEOHead({ titleKey, descriptionKey, title: rawTitle, description: rawDesc }: SEOHeadProps) {
    const { t, i18n } = useTranslation();

    const title = rawTitle || (titleKey ? `${t(titleKey)} | FouDeBusinessWorld` : 'FouDeBusinessWorld');
    const description = rawDesc || (descriptionKey ? t(descriptionKey) : t('tagline'));

    return (
        <Helmet>
            <html lang={i18n.language} />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:locale" content={i18n.language === 'fr' ? 'fr_FR' : 'en_US'} />
        </Helmet>
    );
}
