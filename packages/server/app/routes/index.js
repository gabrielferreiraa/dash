import express from 'express';
import auth from '../middlewares/auth';
import userRoutes from './user';
import authRoutes from './auth';
import storageRoutes from './storage';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', auth, userRoutes);
router.use('/storage', storageRoutes);

export default router;
