import { Auth } from '../services';
import authMessages from '../helpers/messages/auth';

/**
 * Middleware responsável por validar o login de usuário.
 * => Valida e a requisição possui um token
 * => Valida se o token é válido
 */
const auth = async (req, res, next) => {
	const token = req.headers.authorization;

	if (!token) {
		return res.status(403).send(authMessages.tokenNotFound);
	}

	const isValid = await Auth.verify(token);

	if (!isValid) {
		return res.status(401).send(authMessages.sessionExpired);
	}

	return next();
};

export default auth;
