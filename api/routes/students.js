"use strict";
const { Router } = require('express')
const router = Router()
import { StudentActions } from '../controllers/controllersStudents'
router.post('/students', StudentActions.getAllStudents)
router.post('/students/new', StudentActions.createStudent)
router.post('/students/:name', StudentActions.getStudent)
router.put('/students/:name', StudentActions.updateStudent)

module.exports = router
