import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import english from './en.json';
import arabic from './ar.json';
  
i18n.use(initReactI18next).init({
    initImmediate: false,
    resources: {
      en: {
        translation: english
      },
      ar: {
        translation: arabic
      }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });
export default i18n;