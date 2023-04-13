import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'Welcome to React': 'Welcome to React and react-i18next',
        "Back": 'Back',
        'Full filmography': 'Full filmography',
        '8 movies': '8 movies'
      }
    },
    ru: {
      translation: {
        'Welcome to React': 'Добро пожаловать в React и react-i18next',
        "Back": 'Назад',
        'Full filmography': 'Полная фильмография',
        '8 movies': '8 фильмов'
      }
    }
  },
  lng: 'ru',
  fallbackLng: 'ru',

  interpolation: {
    escapeValue: false
  }
})

export default i18n
