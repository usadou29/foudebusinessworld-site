import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonFR from '../locales/fr/common.json';
import commonEN from '../locales/en/common.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            fr: {
                common: commonFR,
            },
            en: {
                common: commonEN,
            },
        },
        fallbackLng: 'fr',
        supportedLngs: ['fr', 'en'],
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        detection: {
            order: ['path', 'navigator'],
            lookupFromPathIndex: 0,
        },
    });

export default i18n;
