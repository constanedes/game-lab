import { Router } from 'express';
import * as gameController from '../controllers/game.controllers';
import checkAdmin from '../middlewares/checkAdmin';
import checkJwt from '../middlewares/checkJwt';
const router: Router = Router();
const id = ':id(\\d+)/';

router.get('/', gameController.listAll);
router.get(`/${id}`, gameController.getOneById);
router.get('/popular', gameController.getPopularOnes);
router.get('/random', gameController.getRandomOne);
router.post(`/create`, [checkJwt, checkAdmin], gameController.createOne);
router.put(`/update/${id}`, [checkJwt, checkAdmin], gameController.updateOne);
router.delete(`/delete/${id}`, [checkJwt, checkAdmin], gameController.deleteOne);

export default router;
