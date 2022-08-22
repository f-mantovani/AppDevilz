import { Router } from 'express'

import FormationCrontrollers from '../controllers/formation.controllers.js'
import { validateEditPrivilege } from '../controllers/helperFunctions/generalFunctions/validateEditPrivilege.js'

const router = Router()

router.post('/new', FormationCrontrollers.create )
router.put('/edit', validateEditPrivilege, FormationCrontrollers.update )


export default router