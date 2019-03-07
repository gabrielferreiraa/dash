import { upload } from '../tools/storage';

const storage = (req, res, next) => {
	return upload(req, res, err => {
		if (err) {
			return res.status(400).send(err);
		}

		return next();
	});
};

export default storage;
