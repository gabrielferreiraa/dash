require('dotenv').config();

import { isValidMimeType, getExtension } from '../helpers/storage';
import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import uuid from 'uuid/v1';
import { limit } from '../../config/storage';
import storageMessage from '../helpers/messages/storage';

aws.config.update({
	secretAccessKey: process.env.STORAGE_SECRET_ACCESS_KEY,
	accessKeyId: process.env.STORAGE_ACCESS_KEY_ID
});

/**
 * Método responsável por validar o arquivo
 *
 * @param {*} req
 * @param {*} file
 * @param {*} cb
 */
const validateFile = (req, file, cb) => {
	if (!isValidMimeType(file.mimetype)) {
		const res = {
			...storageMessage.notAllowedFile,
			mimeType: file.mimetype
		};

		return cb(res, false);
	}

	return cb(null, true);
};

/**
 * Método responsável por realizar o upload para o s3
 */
const upload = multer({
	storage: multerS3({
		s3: new aws.S3(),
		bucket: process.env.STORAGE_BUCKET,
		acl: 'public-read',
		key: (req, file, cb) => {
			const hash = uuid();
			const ext = getExtension(file.originalname);

			cb(null, `${hash}${ext}`);
		}
	}),
	fileFilter: validateFile,
	limits: {
		fileSize: 1024 * 1024 * limit
	}
}).single('file');

export { upload };
