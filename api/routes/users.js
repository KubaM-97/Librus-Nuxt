const { Router } = require('express')

// import mongodb from 'mongodb'
const mongodb = require('mongodb')
const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/users', async function (req, res, next) {
  
// import config from './config/mongodb'

// const MongoClient = mongodb.MongoClient
const connection = await mongodb.MongoClient.connect('mongodb+srv://KubaM97:Pieseł12@test.fya0l.mongodb.net/Librus?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
const r = await connection.db('users').collection('registeredUsers').find().toArray().then(data => res.json(data))
// res.json(users)
// console.log(r.then(data=>));
// res.json(connection.db('users'))
// ctx.type = 'json'
//   ctx.body = {
//     message: r
//   }
connection.close()
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router

//https://github.com/nuxt-community/express-template/blob/master/pages/index.vue