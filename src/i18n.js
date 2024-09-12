import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import hu from './locales/hu.json'


// Retrieve saved language or default to Hungarian
const savedLanguage = localStorage.getItem('language') || 'hu'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hu: { translation: hu },
  },
  lng: savedLanguage, // use save lng or fallback to Hungarian
  fallbackLng: 'hu',
  interpolation: { escapeValue: false },
})

export default i18n