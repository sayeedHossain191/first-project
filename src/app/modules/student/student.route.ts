import express from 'express'
import { StudentControllers } from './student.controller'

const router=express.Router()

// will call controller func
router.post('/create-student',StudentControllers.createStudent)

router.get('/',StudentControllers.getAllStudent)
router.get('/,:StudentId',StudentControllers.getSingleStudent)

export const studentRoutes=router;