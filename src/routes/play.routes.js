import playControllers from '../controllers/play.controllers.js';

import { Router } from 'express';
import { validateEditPrivilege } from '../middleware/validateEditPrivilege.middleware.js';
import { uploadCloud } from '../database/cloudinary.config.js';

const router = Router();

router.get('/one/:playId', playControllers.getOne);

router.get('/', playControllers.getAll);

router.use(validateEditPrivilege);

router.post('/', playControllers.create);

router.put('/update/:playId', playControllers.update);

router.delete('/one/:playId', playControllers.deleteOne);

router.put('/play-image', uploadCloud.single('image'), playControllers.updateImage);

export default router;
