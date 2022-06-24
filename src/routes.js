import express from 'express'
import userControllers from './controllers/user.controllers.js'

const router = express.Router()

// Server checking 
router.get('/healthcheck', (req, res) => {res.sendStatus(200)})

router.post('/user', userControllers.signup)
router.post('/login', userControllers.login)




export default router