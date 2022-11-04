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
            key: 'instances',
            routes: ['/'],
            loader: async () => (await import('./translations/en/instances.json')).default
        }
    ]
})

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);