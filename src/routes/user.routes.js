import userControllers from "../controllers/user.controllers.js";

import { Router } from 'express'
import { validateEditPrivilege } from "../middleware/validateEditPrivilege.middleware.js";
import { uploadCloud } from '../database/cloudinary.config.js' 

const router = Router()

router.put('/edit/:userId', userControllers.autoUpdate)

router.put('/edit-staff/:userId', validateEditPrivilege, userControllers.staffUpdate)

router.put('/profile-image', uploadCloud.single('image'), userControllers.updateImage)

export default router