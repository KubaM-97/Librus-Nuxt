"use strict";
const { Router } = require('express')
const router = Router()

import { UserActions } from '../controllers/controllersUsers'

router.post('/users', UserActions.logIn)

module.exports = router

