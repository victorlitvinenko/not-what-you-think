// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// import Backend from "i18next-xhr-backend";

// import ns1 from 'locales/en/ns1.json';
// import ns2 from 'locales/en/ns2.json';

// declare module 'react-i18next' {
//   interface Resources {
//     ru: typeof ru;
//     en: typeof en;
//   }
// }

// export const resources = {
//   en: {
//     ns1,
//     ns2,
//   },
// } as const;

// i18n.use(initReactI18next).init({
//   lng: 'en',
//   ns: ['ns1', 'ns2'],
//   resources,
// });

// react-i18next.d.ts
// import { resources } from './i18n';

// declare module 'react-i18next' {
//   type DefaultResources = typeof resources['en'];
//   interface Resources extends DefaultResources {}
// }