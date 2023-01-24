import { Router } from 'express';
import * as userController from '../controllers/user.controllers';
import checkJwt from '../middlewares/checkJwt';
import checkAdmin from '../middlewares/checkAdmin';
const router: Router = Router();
const id = ':id(\\d+)';

router.get('/', userController.listAll);
router.get(`/${id}`, userController.getOneById);
router.get('/ranking', userController.getAllByRanking);
router.get(`/${id}/matches`, userController.getHistoryById);
router.get(`/${id}/games`, userController.getRecountById);
router.get('/name/:username', userController.getOneByName);
router.put(`/update/${id}`, [checkJwt], userController.updateOne);
router.delete(`/delete/${id}`, [checkJwt, checkAdmin], userController.deleteOne);

export default router;
