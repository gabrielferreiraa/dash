import path from 'path';
import storageConfig from '../../config/storage';

/**
 * Verifica se o mimeType que esta sendo enviado é permitido
 *
 * @param {*} mimeType
 */
const isValidMimeType = mimeType => {
	if (storageConfig.allowedMimeTypes.includes(mimeType)) {
		return true;
	}

	return false;
};

/**
 * Obtém a extensão de um determinado arquivo
 *
 * @param {*} file
 */
const getExtension = file => path.extname(file).toLowerCase();

export { isValidMimeType, getExtension };
