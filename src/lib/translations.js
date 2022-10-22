import i18n from 'sveltekit-i18n';

const config = ({
    loaders: [
        {
            locale: 'en',
            key: 'common',
            loader: async () => (await import('./translations/en/common.json')).default
        },
        {
            locale: 'en',
            key: 'home',
            routes: ['/'],
            loader: async () => (await import('./translations/en/home.json')).default
        }
    ]
})

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);