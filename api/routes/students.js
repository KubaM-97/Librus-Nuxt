"use strict";
const { Router } = require('express')
const router = Router()

import { StudentActions } from '../controllers/controllersStudents'

router.post('/students', StudentActions.getAllStudents)
router.get('/students/:name', StudentActions.getStudent)
router.post('/students/new', StudentActions.createStudent)
router.put('/students/:name', StudentActions.updateStudent)

module.exports = router
