import express from 'express';
import storageController from '../../controllers/storage';
import storage from '../../middlewares/storage';

const router = express.Router();

router.post('/', storage, storageController.upload);

export default router;
