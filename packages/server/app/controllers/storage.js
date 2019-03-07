import storageMessages from '../helpers/messages/storage';

const upload = async (req, res) => {
	try {
		return res.json({ file: req.file.location });
	} catch (err) {
		res.status(400).send(storageMessages.default);
		throw new Error(err.message);
	}
};

export default { upload };
