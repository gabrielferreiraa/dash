import express from 'express';
import storageController from '../../controllers/storage';
import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import uuid from 'uuid/v1';

const router = express.Router();

aws.config.update({
	secretAccessKey: 'wZP+hBZggYq1vffHcstD9201TPqUVpLEok9RvmtH',
	accessKeyId: 'AKIAINBIYOB5BWO7RJFQ'
});

const s3 = new aws.S3();

const upload = multer({
	storage: multerS3({
		s3: s3,
		acl: 'public-read',
		bucket: 'gabrielferreira-dash-dev',
		key: function(req, file, cb) {
			console.log(file);
			cb(null, file.originalname);
		}
	})
});

router.post('/', upload.single('photo'), storageController.upload);

export default router;
