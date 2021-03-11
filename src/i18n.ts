import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

import RU from './utils/locales/ru';
import EN from './utils/locales/en';

declare module 'react-i18next' {
  interface Resources {
    ru: typeof RU;
    en: typeof EN;
  }
}

const resources = {
  ru: {
    translation: RU,
  },

  en: {
    translation: EN,
  },
};

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ['EN', 'RU'],
  resources,
});

export default resources;
