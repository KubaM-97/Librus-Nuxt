"use strict";
const { Router } = require('express')
const router = Router()
import { LoginActions } from '../controllers/controllersLogin'

router.post('/login', LoginActions.logIn)

// Refresh tokens
const refreshTokens = {}

router.post('/refresh', (req, res) => {
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
  router.get('/user', (req, res) => {
    console.log('zaczyna się user:', req.user);
    res.json({ user: req.user })
  })
  
  // [POST] /logout
  router.post('/logout', (_req, res) => {
    console.log('zaczyna się logout:', req.user);

    res.json({ status: 'OK' })
  })
module.exports = router

