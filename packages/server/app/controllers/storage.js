import storageMessages from '../helpers/messages/storage';

const upload = async ({ file }, res) => {
	try {
		if (!file) {
			return res.status(400).send(storageMessages.fileNotFound);
		}

		return res.json({
			result: {
				originalName: file.originalname,
				size: file.size,
				url: file.location,
				key: file.key
			}
		});
	} catch (err) {
		res.status(400).send(storageMessages.default);
		throw new Error(err.message);
	}
};

export default { upload };
