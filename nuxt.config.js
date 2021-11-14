import {
  resolve
} from 'path'
import { NuxtConfig } from '@nuxt/types'
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
    // '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module'
  ],
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  router: {
    middleware: ['auth']
  },
  // auth: {
  //   login: {
  //     endpoint: 'api/auth/login',
  //     propertyName: 'token',
  //   },
  //   logout: {
  //     endpoint: 'api/logout',
  //     method: 'GET',
  //     paramTokenName: '',
  //     appendToken: false
  //   },
  //   user: {
  //     endpoint: 'api/user',
  //     propertyName: 'user',
  //     paramTokenName: '',
  //     appendToken: false
  //   },
  //   storageTokenName: 'nuxt-auth-token',
  //   tokenType: 'Bearer',
  //   notLoggedInRedirectTo: '/login',
  //   loggedInRedirectTo: '/'
  // },
 
  auth: {
    redirect: {
      logout: '/loggedOut',
      login: '/loggedOut',
      home: '/'
    },
    strategies: {
      local: {
        token: {
          property: 'token.accessToken',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/api/login', method: 'post' },
          logout: { url: '/api/logout', method: 'post' },
          user: { url: '/api/user', method: 'get', propertyName: 'token.accessToken' },
          students: { url: '/api/students', method: 'post' }
        }
      
      },
      localRefresh: {
        scheme: 'refresh',
        token: {
          property: 'token.accessToken',
          maxAge: 15
        },
        refreshToken: {
          property: 'token.refreshToken',
          data: 'refreshToken',
          maxAge: false
        }
      },
      },
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
    // '@nuxt/typescript-build',
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
