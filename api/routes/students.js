"use strict";
const { Router } = require('express')
const router = Router()
console.log('xxxx');
import { StudentActions } from '../controllers/controllersStudents'
router.post('/students', StudentActions.getAllStudents)
router.get('/students/:id', StudentActions.getStudent)
router.post('/students/new', StudentActions.createStudent)
router.put('/students/:id', StudentActions.updateStudent)

module.exports = router
