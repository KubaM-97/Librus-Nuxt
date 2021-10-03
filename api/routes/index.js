"use strict";
const { Router } = require('express')
const rootRouter = Router()

const users = require('./users')
const students = require('./students')

rootRouter.use('/users', users)
rootRouter.use('/students', students)

module.exports = rootRouter