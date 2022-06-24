import express from 'express'
import userControllers from './controllers/user.controllers.js'

const router = express.Router()

// Server checking 
router.get('/healthcheck', (req, res) => {res.sendStatus(200)})

router.get('/user', userControllers.signup)




export default router