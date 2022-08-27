import formationControllers from '../controllers/formation.controllers.js';

import { Router } from 'express';
import { validateEditPrivilege } from '../middleware/validateEditPrivilege.middleware.js';
import { uploadCloud } from '../database/cloudinary.config.js';

const router = Router();

router.get('/', formationControllers.getAll);

router.get('/one/:formationId', formationControllers.getOne);

router.use(validateEditPrivilege);

router.post('/', formationControllers.create);

router.put('/edit/:formationId', formationControllers.update);

router.delete('/delete/:formationId', formationControllers.deleteOne);

router.put('/formation-image', uploadCloud.single('image'), formationControllers.updateImage);

export default router;
