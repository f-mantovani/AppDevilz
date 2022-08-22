import { Router } from 'express'

import FormationCrontrollers from '../controllers/formation.controllers.js'
import { validateEditPrivilege } from '../middleware/validateEditPrivilege.middleware.js'

const router = Router()

router.post('/new', FormationCrontrollers.create )
router.put('/edit/:formationId', validateEditPrivilege, FormationCrontrollers.update )


export default router