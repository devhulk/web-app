export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cp-rehicle-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/firebase.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.GOOGLE_AUTH_KEY,
          authDomain: process.env.GOOGLE_AUTH_DOMAIN,
          projectId: 'rehicle',
          storageBucket: 'rehicle.appspot.com',
          messagingSenderId: '675107999277',
          appId: '1:675107999277:web:18cb7546b037b92883b2a4',
          measurementId: ''
        },
        services: {
          auth: true // Just as example. Can be any other service.
        },
        injectModule: true
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    vaultUrl: process.env.VAULT_SERVER,
    vaultToken: process.env.VAULT_TOKEN,
    googleAuthKey: process.env.GOOGLE_AUTH_KEY,
    googleAuthDomain: process.env.GOOGLE_AUTH_DOMAIN,

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  strategies: {
    google: {
      clientId: ''
    }
  },
  router: {
    middleware: ['auth']
  }
}
