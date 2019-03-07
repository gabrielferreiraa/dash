import express from 'express';
import storageController from '../../controllers/storage';

const router = express.Router();

router.post('/', storageController.upload);

export default router;
