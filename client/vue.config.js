module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@assets': 'src/assets',
      },
    },
  },

  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_mixins.scss";
        `,
      },
    },
  },

  pluginOptions: {
    i18n: {
      locale: 'es-AR',
      fallbackLocale: 'es-AR',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
}
