import {
  mongo
} from '../mongodb'
import jsonwebtoken from 'jsonwebtoken'

class LoginController {
  async logIn(req, res) {
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
        console.log('Połączono i znaleziono użytkownika z bazy danych: ', results, 'KONIEC INFO');
        const expiresIn = 60
        
        // const valid = username.length && password === '123'
        // const refreshToken =
        //   Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1

        // if (!valid) {
        //   throw new Error('Invalid username or password')
        // }
        // res.json({
        //   lastName: results.lastName,
        //   firstName: results.firstName,
        //   group: results.group
        // })
        const accessToken = jsonwebtoken.sign({
            username,
            lastName: results.lastName,
            firstName: results.firstName,
            group: results.group,
            name: 'User ' + username,
            scope: ['test', 'user']
          },
          'dummy', {
            expiresIn
          }
        )

        // refreshTokens[refreshToken] = {
        //   accessToken,
        //   user: {
        //     username,
        //     picture: 'https://github.com/nuxt.png',
        //     name: 'User ' + username
        //   }
        // }

        res.json({
          token: {
            accessToken,
            // refreshToken
          }
        })
      } 
      // else {
      //   res.sendStatus(401)
      // }
      await mongo.close()

















    } catch (err) {
      console.error(err)
      res.sendStatus(500)
    }
  }

}
export const LoginActions = new LoginController()
