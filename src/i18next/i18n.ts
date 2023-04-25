import i18n from 'i18next'
// import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import ru from './locales/ru/translation.json';
import en from './locales/en/translation.json';

i18n
  .use(initReactI18next)
  // .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'ru',
    resources: {
      ru,   
      en     
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
