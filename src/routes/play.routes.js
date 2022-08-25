import { Router } from 'express'

import { validateEditPrivilege } from '../middleware/validateEditPrivilege.middleware.js'
import playControllers from '../controllers/play.controllers.js'

const router = Router()

router.use(validateEditPrivilege)

router.post('/', playControllers.create)
router.put('/update/:playId', playControllers.update)

export default router