require('dotenv').config();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

/**
 * Método responsável por criar o hash das senhas
 *
 * @param {*} pass
 */
const hash = pass => bcrypt.hash(pass, 10);

/**
 * Método responsável por favar a comparação entre 2 senhas através do bcrypt
 */
const comparePass = (requestPass, userPass) => bcrypt.compare(requestPass, userPass);

/**
 * Método responsável por criar o token, com ID e E-mail do Usuário
 * Necessária SECRET_API_KEY
 * Por padrão o Token expira em 24hrs
 *
 * @param {*} param0
 */
const token = ({ id, email }) => {
	let expiresIn = 86400; //1 day

	return jwt.sign({ id, email }, process.env.SECRET_API_KEY, { expiresIn });
};

/**
 * Método responsável por receber um token e verificar se é um token válido ou não expirado
 *
 * @param {*} token
 */
const verify = token => {
	return jwt.verify(token, process.env.SECRET_API_KEY, (err, decoded) => {
		if (err) return false;

		return true;
	});
};

export default { hash, comparePass, token, verify };
