import { Router } from 'express'

import { validateEditPrivilege } from '../middleware/validateEditPrivilege.middleware.js'
import playControllers from '../controllers/play.controllers.js'

const router = Router()

router.use(validateEditPrivilege)

router.post('/', playControllers.create)

export default router