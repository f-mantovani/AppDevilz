import { Router } from 'express'

import { validateEditPrivilege } from '../middleware/validateEditPrivilege.middleware.js'
import playControllers from '../controllers/play.controllers.js'

const router = Router()

router.get('/one/:playId', playControllers.getOne)

router.get('/', playControllers.getAll)

router.use(validateEditPrivilege)

router.post('/', playControllers.create)

router.put('/update/:playId', playControllers.update)

router.delete('/one/:playId', playControllers.deleteOne)

export default router