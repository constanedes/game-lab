import { Router } from 'express';
import * as authController from '../controllers/auth.controllers';

const router: Router = Router();

router.post(`/signup`, authController.register);
router.post(`/login`, authController.login);

export default router;
