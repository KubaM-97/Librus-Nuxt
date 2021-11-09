import {
  resolve
} from 'path'
export default {
  alias: {
    'images': resolve(__dirname, './assets/images'),
  },
  head: {
    title: 'Librus',
    htmlAttrs: {
      lang: 'pl'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  router: {
    middleware: ['auth']
  },
  css: [
    '@/assets/scss/main.scss',
  ],
  plugins: [
    '~/plugins/bootstrap.js',
    '~/plugins/mixins.js',
    '~/plugins/vuelidate.js',
  ],
  components: true,
  buildModules: [
    'nuxt-typed-vuex',
    '@nuxtjs/composition-api/module'
  ],
  cli: {
    bannerColor: 'yellow'
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  auth: {
    redirect: {
      login: '/loggedOut',
      logout: '/loggedOut',
      // callback: '/a',
      home: '/group/3B'
    },
    strategies: {
      local: {
        token: {
          property: 'token.accessToken'
        }
      },
    }
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxt/typescript-build',
    '@nuxtjs/toast',
    '@nuxtjs/auth-next',
    ['@nuxtjs/i18n', {
      locales: [{
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
      keySeparator: '.',
      returnObjects: true,
    }],
    '@nuxt/http'
  ],
  toast: {
    position: 'bottom-left',
    duration: 3500,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  },
  bootstrapVue: {
    bootstrapCSS: false,
    icons: true,
  },
  serverMiddleware: [
    '~/api',
  ],
  // serverMiddleware: [
  //   {
  //     '/api': '~/api',
  //   }
  // ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  build: {
    splitChunks: {
      layouts: false,
      pages: true,
      commons: true
    },
    extend(config, {
      isServer
    }) {
      if (isServer) {
        config.devtool = 'source-map'
      }
    }
  },
  target: 'server',
}
