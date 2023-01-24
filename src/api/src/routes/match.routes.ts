import { Router } from 'express';
import * as matchController from '../controllers/match.controllers';
import checkAdmin from '../middlewares/checkAdmin';
import checkJwt from '../middlewares/checkJwt';
const router: Router = Router();

router.get('/', matchController.listAll);
router.get('/inspect/:id', [checkJwt], matchController.getOneById);
router.get('/latest', matchController.getTheLastOne);
router.post(`/create`, [checkJwt, checkAdmin], matchController.createOne);
router.delete(`/clear`, [checkJwt, checkAdmin], matchController.deleteAll);

export default router;
