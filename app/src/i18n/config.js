import i18n from 'i18next';                      
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: process.env.PUBLIC_URL + '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
