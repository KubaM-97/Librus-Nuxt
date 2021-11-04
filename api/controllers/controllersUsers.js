import {mongo} from '../mongodb'

class UserController {
  async logIn(req, res) {
    const signInData = {
      login: req.body.login,
      password: req.body.password,
    }
    try {

      const db = await mongo.connect('users');
      const collection = await db.collection('registeredUsers')
      const results = await collection.findOne({
        login: signInData.login,
        password: signInData.password
      })
      if(results) {
        res.json({
          lastName: results.lastName,
          firstName: results.firstName,
          group: results.group
        })
      }
      else { res.sendStatus(401) }
      await mongo.close()

    } catch (err) {
      console.error(err)
      res.sendStatus(500)
    }

  }
}
export const UserActions = new UserController()
// module.exports = new UserController()
