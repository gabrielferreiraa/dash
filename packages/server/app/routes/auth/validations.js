const requiredFields = ['email', 'password'];

export default ({ body } = req, res, next) => {
	const errors = requiredFields.reduce((acc, value) => {
		const isPresent = body.hasOwnProperty(value);
		if (!isPresent) {
			const msg = `${value} não encontrado no corpo da requisição`;
			return acc.concat(msg);
		}

		return acc;
	}, []);

	if (errors.length > 0) {
		return res.status(400).json({ errors });
	}

	return next();
};
