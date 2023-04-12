import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'Welcome to React': 'Welcome to React and react-i18next'
      }
    },
    ru: {
      translation: {
        'Welcome to React': 'Добро пожаловать в React и react-i18next'
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false
  }
})

export default i18n
