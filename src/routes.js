import { Router }from 'express'

import authRoutes from './routes/auth.routes.js'
import formationRoutes from './routes/formation.routes.js'
import playRoutes from './routes/play.routes.js'
import userRoutes from './routes/user.routes.js'

import { isAuthenticated } from './middleware/auth.middleware.js'

const router = Router()

// Server checking 
router.get('/healthcheck', (req, res) => {res.sendStatus(200)})

router.use('/auth', authRoutes)

router.use(isAuthenticated)

router.use('/formations', formationRoutes)

router.use('/plays', playRoutes)

router.use ('/user', userRoutes)




export default router