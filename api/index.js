import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import jwt from 'express-jwt'
import jsonwebtoken from 'jsonwebtoken'
import {
  mongo
} from './mongodb'
const login = require('./routes/login')
const students = require('./routes/students')
// console.log('YYYYYYYYYYYYYYYYYYYYY',students);
// Create app
const app = express()

// Install middleware
app.use(cookieParser())
app.use(bodyParser.json())
// app.use(login)
app.use(students)
// JWT middleware
app.use(
  jwt({
    secret: 'dummy',
    algorithms: ['sha1', 'RS256', 'HS256']
  }).unless({
    path: ['/api/login', '/api/refresh']
    // path: ['/api/login', '/api/refresh', '/api/user']
  })
)
const refreshTokens = {}

// [POST] /login
app.post('/login', async (req, res) => {
    console.log('login2');
  const { username, password } = req.body
  const db = await mongo.connect('users');
  const collection = await db.collection('registeredUsers')
  const results = await collection.findOne({
      login: username,
      password
    })
  const expiresIn = 900
  const refreshToken =
    Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1

  
// console.log('xxx', results.group);
  const accessToken = jsonwebtoken.sign(
    {
      lastName: results.lastName,
            firstName: results.firstName,
            group: results.group,
    },
    'dummy',
    {
      expiresIn
    }
  )
  refreshTokens[refreshToken] = {
    accessToken,
    user: {
      username,
      picture: 'https://github.com/nuxt.png',
      name: 'User ' + username
    }
  }
  res.json({
    token: {
      accessToken,
      refreshToken
    }
  })
})

app.post('/refresh', (req, res) => {
    console.log('refresh');
  const { refreshToken } = req.body

  if (refreshToken in refreshTokens) {
    const user = refreshTokens[refreshToken].user
    const expiresIn = 3600
    const newRefreshToken =
      Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1
    delete refreshTokens[refreshToken]
    const accessToken = jsonwebtoken.sign(
      {
        user: user.username,
        picture: 'https://github.com/nuxt.png',
        name: 'User ' + user.username,
        scope: ['test', 'user']
      },
      'dummy',
      {
        expiresIn
      }
    )

    refreshTokens[newRefreshToken] = {
      accessToken,
      user
    }

    res.json({
      token: {
        accessToken,
        refreshToken: newRefreshToken
      }
    })
  } else {
    res.sendStatus(401)
  }
})

// [GET] /user
app.get('/user', (req, res) => {
    console.log('user', req.user.username);
  res.json({ user: req.user })
})

// [POST] /logout
app.post('/logout', (_req, res) => {
    console.log('logout');
  res.json({ status: 'OK' })
})



// app.post('/students',  async (req, res)=>{
//     console.log('getAllStudents', req.body.group);

//     const group = req.body.group;
//     try {

//       const db = await mongo.connect('students');
//       const collection = db.collection(`group_${group}`);

//       const results = await collection.find().sort({lastName: 1}).toArray()

//       results.length ? res.json(results) : res.sendStatus(404)

//       mongo.close();

//     } catch (err) {
//       console.error(err);
//       res.sendStatus(500)
//     }
// })

// Error handler
app.use((err, _req, res) => {
  // console.error(err) // eslint-disable-line no-console
  console.error('błąd główny', err.response, err.data) // eslint-disable-line no-console
  // res.sendStatus(401).send(err + '')
})

// -- export app --
export default {
  path: '/api',
  handler: app
}