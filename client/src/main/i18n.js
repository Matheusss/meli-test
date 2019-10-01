import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const loadLocaleMessages = () => {
  const locales = require.context(
    '../modules',
    true,
    /i18n\/[A-Za-z0-9-_,\s]+\.json$/i,
  )

  return locales.keys()
    .reduce((acc, key) => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i)

      if (matched && matched.length > 1) {
        const locale = matched[1]
        return {
          [locale]: {
            ...acc[locale],
            ...locales(key),
          },
        }
      }

      return acc
    }, {})
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
})
