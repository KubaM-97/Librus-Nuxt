const { loadNuxt, build } = require('nuxt')

const app = require('express')()
const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

async function start() {
  // We get Nuxt instance
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  // Render every route with Nuxt
  app.use(nuxt.render)

  // Build only in dev mode with hot-reloading
  if (isDev) {
    build(nuxt)
  }
  // Listen the server
  app.listen(port, '0.0.0.0')
  console.log('222222222222222222222222222222222Server listening on `localhost:' + port + '`.')
}

start()

import Router from 'koa-router'
// import Mongo from './mongo'
// const mongo = new Mongo()
const router = new Router({ prefix: '/api' })

// Home page.
router.get('/users', async (ctx, next) => {
  'use strict'

import mongodb from 'mongodb'
// import config from './config/mongodb'

// const MongoClient = mongodb.MongoClient
const connection = await mongodb.MongoClient.connect('mongodb+srv://KubaM97:Pieseł12@test.fya0l.mongodb.net/Librus?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
const r = connection.db('users').collection('registeredUsers').find()
ctx.type = 'json'
  ctx.body = {
    message: r
  }
connection.close()
// export default class Mongo {
//   constructor () {
//     this.connection = null
//     // https://docs.mongodb.com/manual/reference/method/ObjectId/index.html#ObjectId
//     // https://stackoverflow.com/questions/28895067/using-uuids-instead-of-objectids-in-mongodb
//     this.objectId = mongodb.ObjectId
//   }

//   async connect (dbame) {
//     // Use connect method to connect to the Server.
//     // https://stackoverflow.com/questions/50448272/avoid-current-url-string-parser-is-deprecated-warning-by-setting-usenewurlpars
//     this.connection = await MongoClient.connect(config.url, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true
//     })
//     return this.connection.db(dbname)
//   }

//   close () {
//     this.connection.close()
//   }
// }

// const mongo = async () => {
//   // Use connect method to connect to the Server
//   const client = await MongoClient.connect(config.url)
//   const db = client.db(config.dbname)
//   return db
// }

// export default mongo
  console.log('444444444444444444444444444444444');
  // ctx.type = 'json'
  // ctx.body = {
  //   message: 'Hello World!'
  // }
})