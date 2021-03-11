import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from './utils/locales/ru';
import en from './utils/locales/en';

declare module 'react-i18next' {
  interface Resources {
    ru: typeof ru;
    en: typeof en;
  }
}

export const resources = { en, ru } as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ['ns1', 'ns2'],
  resources,
});

declare module 'react-i18next' {
  type DefaultResources = typeof resources['en'];
  interface Resources extends DefaultResources { }
}