import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from './resources';
import { customDetector } from './detectors';

// i18n.addDetector(customDetector);
const languageDetector = new LanguageDetector();

languageDetector.addDetector(customDetector);

await i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources,
        ns: ['common'],
        defaultNS: 'common',
        detection: {
            order: ['customDetector', 'localStorage', 'navigator'],
            caches: ['localStorage'],
            lookupLocalStorage: 'i18nextLng'
        },
        interpolation: {
            escapeValue: false
        },
        supportedLngs: ['en', 'es', 'fr', 'de'],
        load: 'currentOnly',
        keySeparator: false, // For simpler keys
    });


export default i18n;
