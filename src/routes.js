import { Router }from 'express'

import authRoutes from './routes/auth.routes.js'
import formationRoutes from './routes/formation.routes.js'

const router = Router()

// Server checking 
router.get('/healthcheck', (req, res) => {res.sendStatus(200)})


router.use('/auth', authRoutes)

router.use('/formations', formationRoutes)




export default router