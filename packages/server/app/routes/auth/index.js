import express from 'express';
import validations from './validations';
import authController from '@controllers/auth';

const router = express.Router();

router.post('/', validations, authController.signIn);

export default router;
