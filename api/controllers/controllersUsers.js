import {mongo} from '../mongodb'

class UserController {
  async postUser(req, res) {
    const signInData = {
      login: req.body.login,
      password: req.body.password,
    }
    try {

      const db = await mongo.connect('users');
      const collection = await db.collection('registeredUsers')

      await collection.findOne({
        login: signInData.login,
        password: signInData.password
      }).then(data => res.json({
        lastName: data.lastName,
        firstName: data.firstName,
        group: data.group,
      })).catch(err => res.json(err))
      await mongo.close()

    } catch (err) {
      console.error(err)
      res.sendStatus(500)
    } finally {

    }


  }
}
export const UserActions = new UserController()
// module.exports = new UserController()
