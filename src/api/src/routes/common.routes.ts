import { Router } from 'express';
import * as commonController from '../controllers/common.controllers';
const router: Router = Router();

router.get('/', commonController.apiHome);
router.get('/health', commonController.health);
router.get('/creators', commonController.creators);

export default router;
