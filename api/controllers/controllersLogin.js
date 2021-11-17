import {
  mongo
} from '../mongodb'
import jsonwebtoken from 'jsonwebtoken'
const bcrypt = require("bcrypt");
const refreshTokens = {}
class LoginController {

  async login(req, res) {
    res.sendStatus(400)
    // res.setHeader('Access-Control-Allow-Origin', '*');
    try {
      const {
        login,
        password
      } = req.body

      const db = await mongo.connect('users');
      const collection = await db.collection('registeredUsers')

      const results = await collection.findOne({
        login
      })
      if (!results) return res.sendStatus(404)

      bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);

      const isCorrectPassword = bcrypt.compareSync(password, results.password);

      if (!isCorrectPassword) return res.sendStatus(401)

      const {
        lastName,
        firstName,
        group
      } = results;

      const expiresIn = 2700
      const refreshToken =
        Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1

      const accessToken = jsonwebtoken.sign({
          lastName,
          firstName,
          group,
        },
        'dummy', {
          expiresIn
        }
      )
      refreshTokens[refreshToken] = {
        accessToken,
        user: {
          lastName,
          firstName,
          group,
        }
      }
      res.json({
        token: {
          accessToken,
          refreshToken
        }
      })
      await mongo.close()
    } catch (err) {
      console.error(err)
      res.sendStatus(500)
    }

  }
  async refresh(req, res) {
    const {
      refreshToken
    } = req.body

    if (refreshToken in refreshTokens) {
      const {
        lastName,
        firstName,
        group,
      } = refreshTokens[refreshToken].user
      const expiresIn = 21600
      const newRefreshToken =
        Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1
      delete refreshTokens[refreshToken]
      const accessToken = jsonwebtoken.sign({
          lastName,
          firstName,
          group,
        },
        'dummy', {
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
    res.json({
      user: req.user
    })
  }
  logout(_req, res) {
    res.json({
      status: 'OK'
    })
  }
}
export const LoginActions = new LoginController()
