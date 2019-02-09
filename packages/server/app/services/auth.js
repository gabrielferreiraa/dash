import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config/auth';

const hash = pass => bcrypt.hash(pass, 10);

const comparePass = (requestPass, userPass) => bcrypt.compare(requestPass, userPass);

const token = ({ id, email }) => {
	let oneDay = 86400;

	return jwt.sign({ id, email }, config.secretKey, {
		expiresIn: oneDay
	});
};

const verify = token => {
	return jwt.verify(token, config.secretKey, (err, decoded) => {
		if (err) return false;

		return true;
	});
};

export default { hash, comparePass, token, verify };
