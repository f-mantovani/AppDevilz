import User from "../database/services/user.service.js";
import userControllers from "../controllers/user.controllers.js";

import { Router } from 'express'
import { validateEditPrivilege } from "../middleware/validateEditPrivilege.middleware.js";

const router = Router()

router.put('/edit/:userId', userControllers.autoUpdate)

router.put('/edit-staff/:userId', validateEditPrivilege, userControllers.staffUpdate)



export default router