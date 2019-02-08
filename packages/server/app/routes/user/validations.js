import transformers from '../../helpers/transformers';

export default (req, res, next) => {
	req.check('name').withMessage('Nome inválido');
	req.check('email')
		.isEmail()
		.withMessage('E-mail inválido');

	req.check('password')
		.isLength({ min: 5, max: 12 })
		.withMessage('A senha precisa ter no mínimo 5 e no máximo 12 caracteres');

	req.check('passwordConfirmation')
		.equals(req.body.password)
		.withMessage('A confirmação de senha precisa ser igual a senha');

	const errors = req.validationErrors();

	if (errors) {
		return res.status(422).json({ errors: transformers.errorResponse(errors) });
	}

	return next();
};
