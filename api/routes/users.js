// "use strict";
// const { Router } = require('express')
// const router = Router()

// import { UserActions } from '../controllers/controllersUsers'

// router.post('/users', UserActions.logIn)

// module.exports = router

const jsonwebtoken = require('jsonwebtoken')
const { Router } = require('express')
const router = Router()

// Refresh tokens
const refreshTokens = {}

// -- Routes --

// [POST] /login
router.post('/users', (req, res) => {
  console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTt');

  const { login, password } = req.body
  const valid = login==='Login1' && password === 'Password1'
  console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTt');
  const expiresIn = 15
  const refreshToken =
    Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1

  if (!valid) {
    throw new Error('Invalid username or password')
  }

  const accessToken = jsonwebtoken.sign(
    {
      username,
      picture: 'https://github.com/nuxt.png',
      name: 'User ' + username,
      scope: ['test', 'user']
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

module.exports = router
