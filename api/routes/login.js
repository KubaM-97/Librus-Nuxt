"use strict";
const { Router } = require('express')
const router = Router()
import { LoginActions } from '../controllers/controllersLogin'
console.log('3434');
router.post('/login', LoginActions.login)
router.post('/refresh', LoginActions.refresh)
router.get('/user', LoginActions.getUser)
router.post('/logout', LoginActions.logout)
   
module.exports = router

