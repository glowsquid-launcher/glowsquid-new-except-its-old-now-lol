
import {
    detectLocale,
    localStorageDetector,
    navigatorDetector,
} from 'typesafe-i18n/detectors'

import { setLocale } from '$i18n/i18n-svelte'
import { baseLocale, locales } from '$i18n/i18n-util'
import { loadLocale } from '$i18n/i18n-util.sync'

/**
 * refreshes the current locale and loads whatever new things you wanted it to load
 */
export const refreshLocales = () => {
    const currentLocale = detectLocale(
        baseLocale,
        locales,
        navigatorDetector,
        localStorageDetector
    )

    loadLocale(currentLocale)
    setLocale(currentLocale)
}