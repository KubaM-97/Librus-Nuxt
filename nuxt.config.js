import { resolve } from 'path'
export default {
  alias: {
    'images': resolve(__dirname, './assets/images'),
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'expressSM',
    htmlAttrs: {
      lang: 'en'
    },
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
    '@/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/bootstrap.js',
    // '~/plugins/toast.js',
    '~/plugins/mixins.js',
    '~/plugins/vuelidate.js',
    '~/plugins/vue-fragment.js',
    '~/plugins/v-mask.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-typed-vuex',
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxt/typescript-build',
    '@nuxtjs/toast',
    ['@nuxtjs/i18n', {
      locales: [
        {
          code: 'pl',
          file: 'pl.js'
        },
        {
          code: 'en',
          file: 'en.js'
        }
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'pl',
      keySeparator: '.'
    }],
    '@nuxt/http'
  ],
  toast: {
    position: 'bottom-left',
    duration: 3500,
},
   // specify module rules for css and scss
   module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  
  // use these settings to use custom css
  bootstrapVue: {
    bootstrapCSS: false,
    icons: true,
  },

  /*
  ** Server Middleware
  */
  serverMiddleware: {
    '/api': '~/api'
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  target: 'server',
}
