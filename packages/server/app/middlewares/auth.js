import { Auth } from '../services';

const auth = (req, res, next) => {
	const token = req.headers.authorization;

	if (!token) {
		return res.status(403).send('Token não encontrado');
	}

	const isValid = Auth.verify(token);

	if (!isValid) {
		return res.status(401).send('Sessão expirada ou token inválido');
	}

	return next();
};

export default auth;
