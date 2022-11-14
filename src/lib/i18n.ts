import { detectLocale, localStorageDetector, navigatorDetector } from 'typesafe-i18n/detectors';

/**
 * refreshes the current locale and loads whatever new things you wanted it to load
 */
export const refreshLocales = () => {
  const currentLocale = detectLocale(baseLocale, locales, navigatorDetector, localStorageDetector);

  loadLocale(currentLocale);
  setLocale(currentLocale);
};
