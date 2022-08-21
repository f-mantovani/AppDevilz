import { Router } from 'express'

import FormationCrontrollers from '../controllers/formation.controllers.js'

const router = Router()

router.post('/new', FormationCrontrollers.create )
router.put('/edit', FormationCrontrollers.update )


export default router