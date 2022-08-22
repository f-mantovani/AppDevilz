import { Router } from 'express';

import FormationCrontrollers from '../controllers/formation.controllers.js';
import { validateEditPrivilege } from '../middleware/validateEditPrivilege.middleware.js';

const router = Router();

router.get('/', FormationCrontrollers.getAll);

router.use(validateEditPrivilege);

router.post('/new', FormationCrontrollers.create);

router.put('/edit/:formationId', FormationCrontrollers.update);

export default router;
