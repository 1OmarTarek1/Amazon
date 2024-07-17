import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
import enTranslation from '../locales/en/translation.json';
import arTranslation from '../locales/ar/translation.json';

// Default language
const defaultLanguage = 'en';
const languageKey = 'selectedLanguage';

// Initialize i18next
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation },
            ar: { translation: arTranslation }
        },
        lng: localStorage.getItem(languageKey) || defaultLanguage, // Use stored language or default
        fallbackLng: defaultLanguage,
        interpolation: {
            escapeValue: false
        }
    });
    

export default i18n;
