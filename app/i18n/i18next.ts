import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import english from './en.json';
import arabic from './ar.json';
import { I18nManager } from "react-native";

  
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
    lng: I18nManager.isRTL ? "ar" : 'en',  // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;