
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import jwt from 'express-jwt'
import jsonwebtoken from 'jsonwebtoken'
const login = require('./routes/login')
const students = require('./routes/students')

const app = express()

app.use(cookieParser())
app.use(bodyParser.json())

// JWT middleware
app.use(
  jwt({
    secret: 'dummy',
    algorithms: ['sha1', 'RS256', 'HS256']
  }).unless({
    path: ['/api/auth/login', '/api/auth/refresh', '/api/auth/students', '/api/auth/students/new']
  })
)
// Refresh tokens
const refreshTokens = {}
app.use(login)
app.use(students)

app.post('/refresh', (req, res) => {
  const { refreshToken } = req.body

  if (refreshToken in refreshTokens) {
    const user = refreshTokens[refreshToken].user
    const expiresIn = 15
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
  res.json({ user: req.user })
})

// [POST] /logout
app.post('/logout', (_req, res) => {
  res.json({ status: 'OK' })
})

// // Error handler
// app.use((err, _req, res) => {
//   console.error('błąd gówny', res.statusMessage, res.statusCode) // eslint-disable-line no-console
//   // res.sendStatus(401).send(err + '')
// })

// -- export app --
export default {
  path: '/api/auth',
  handler: app
}