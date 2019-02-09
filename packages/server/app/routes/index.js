import express from 'express';
import auth from '@middlewares/auth';
import userRoutes from './user';
import authRoutes from './auth';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', auth, userRoutes);

export default router;
