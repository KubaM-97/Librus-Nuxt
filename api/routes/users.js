"use strict";
const { Router } = require('express')

const router = Router()
import { mongo } from '../mongodb'

router.post('/users', async function (req, res, next) {
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
  }
  finally {
    
  }


})

module.exports = router

//https://github.com/nuxt-community/express-template/blob/master/pages/index.vue
