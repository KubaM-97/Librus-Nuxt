import {
  resolve
} from 'path'
export default {
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
      href: '../assets/images/Logo.png'
    }]
  },
  alias: {
    'images': resolve(__dirname, './assets/images'),
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
  auth: {
    redirect: {
      logout: '/loggedOut',
      login: '/loggedOut',
      home: '/',
    },
    strategies: {
      local: {
        token: {
          property: 'token.accessToken',
          global: true,
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: {
            url: '/login',
            method: 'post'
          },
          logout: {
            url: '/api/logout',
            method: 'post'
          },
          user: {
            url: '/api/user',
            method: 'get',
            propertyName: 'token.accessToken'
          },
        }

      },
      localRefresh: {
        scheme: 'refresh',
        token: {
          property: 'token.accessToken',
          maxAge: 21600
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
    rules: [{
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }],
  },
  bootstrapVue: {
    bootstrapCSS: false,
    icons: true,
  },
  serverMiddleware: [
    '~/api',
  ],
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
  target: 'static',
  axios: {
    baseURL: 'https://kubam97-librus2',
    proxy: true,
  },
  // or provide a runtime config
// server and clientside
publicRuntimeConfig: {
  axios: {
    browserBaseURL: 'https://kubam97-librus3'
  }
},

// serverside only
privateRuntimeConfig: {
  axios: {
    baseURL: 'https://kubam97-librus4'
  }
},
}
