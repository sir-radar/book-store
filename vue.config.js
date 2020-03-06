module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    },
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/about'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  },
  configureWebpack:{
    performance: {
      hints: false
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
  }
}
