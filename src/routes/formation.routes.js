import { Router } from 'express';

import formationCrontrollers from '../controllers/formation.controllers.js';
import { validateEditPrivilege } from '../middleware/validateEditPrivilege.middleware.js';

const router = Router();

router.get('/', formationCrontrollers.getAll);

router.get('/one/:formationId', formationCrontrollers.getOne)

router.use(validateEditPrivilege);

router.post('/', formationCrontrollers.create);

router.put('/edit/:formationId', formationCrontrollers.update);

router.delete('/delete/:formationId', formationCrontrollers.deleteOne)

export default router;
