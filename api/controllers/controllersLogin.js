import {
  mongo
} from '../mongodb'
import jsonwebtoken from 'jsonwebtoken'

// Refresh tokens
const refreshTokens = {}
class LoginController {
  async login(req, res) {

    try {
      const {
        username,
        password
      } = req.body

    const db = await mongo.connect('users');
    const collection = await db.collection('registeredUsers')
    const results = await collection.findOne({
        login: username,
        password
      })
    if (results) {
        const expiresIn = 900
        
        const refreshToken =
          Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1

        const accessToken = jsonwebtoken.sign({
            lastName: results.lastName,
            firstName: results.firstName,
            group: results.group,
          },
          'dummy', {
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
      } 
      else {
        res.sendStatus(401)
      }
      await mongo.close()

    } catch (err) {
      console.error(err)
      res.sendStatus(500)
    }
  }
  async refresh(req, res) {
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
  }
  getUser(req, res) {
    res.json({ user: req.user })
  }
  logout(_req, res) {
    res.json({ status: 'OK' })
  }
}
export const LoginActions = new LoginController()
