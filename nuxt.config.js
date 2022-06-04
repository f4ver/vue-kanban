export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-trello',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  router: {
    middleware: ['auth']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    
      [
        '@nuxtjs/firebase',
        {
          config: {
            apiKey: "AIzaSyC2Dt4GcuPxro0vxVLXFQGz1Pqf4fU6QM8",
            authDomain: "nuxt-trello-680c2.firebaseapp.com",
            projectId: "nuxt-trello-680c2",
            storageBucket: "nuxt-trello-680c2.appspot.com",
            messagingSenderId: "718019200964",
            appId: "1:718019200964:web:1e273e6b7e1b7cec2f8691",
            measurementId: "G-01J47XNR6L",
          },
          services: {
            auth: {
              persistence: 'local', // default
              initialize: {
                onAuthStateChangedAction: 'onAuthStateChangedAction',
                subscribeManually: false
              },
              ssr: false,
            }
          }
        }
      ]
  ]
,

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
