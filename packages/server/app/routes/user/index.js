import express from 'express';
import validations from './validations';
import userController from '../../controllers/user';

const router = express.Router();

router.get('/', userController.all);
router.post('/', validations, userController.add);
router.put('/:userId', validations, userController.update);

export default router;
