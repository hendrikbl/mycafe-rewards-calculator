export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MyCafe Rewards Calculator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        name: 'google-site-verification',
        content: 'jyrHxv3_6EEpzcOV_qDdeQ2b34S_gtxvkHNhbAwumsI',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/mycafe-rewards-calculator/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/main.css',
    'flag-icon-css/css/flag-icon.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/vue-gtag.js',
      mode: 'client',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://tailwindcss.com/docs/guides/nuxtjs
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxtjs/color-mode',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'MyCafé Rewards Calculator',
      short_name: 'MyCafé Calc',
      lang: 'en',
    },
    meta: {
      name: 'MyCafé Rewards Calculator',
      description: 'Rewards Calculator for MyCafé App',
      appleStatusBarStyle: 'default',
      mobileAppIOS: true,
      theme_color: '#ffffff',
      ogHost: 'https://hendrikbl.github.io/mycafe-rewards-calculator/',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    base: '/mycafe-rewards-calculator/',
  },

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.js',
        dir: 'ltr',
        name: 'English',
        country: 'us',
      },
      {
        code: 'de',
        iso: 'de-DE',
        file: 'de.js',
        dir: 'ltr',
        name: 'Deutsch',
        country: 'de',
      },
      {
        code: 'es',
        iso: 'es-ES',
        file: 'es.js',
        dir: 'ltr',
        name: 'Español',
        country: 'es',
      },
    ],
    defaultLocale: 'en',
    baseUrl: 'https://hendrikbl.github.io/mycafe-rewards-calculator',
    strategy: 'prefix_and_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
      alwaysRedirect: false,
    },
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'theme:mode',
  },

  server: {
    host: '0.0.0.0', // default: localhost
  },
}
