import userControllers from "../controllers/user.controllers.js"

import { Router } from 'express'

const router = Router()

router.post('/signup', userControllers.signup)
router.post('/login', userControllers.login)


export default router