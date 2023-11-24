import express from 'express'
import { userController } from '../controllers/user.contoller'
const router = express.Router()

router.post("/users",userController.createUser)

export const userRoutes=router