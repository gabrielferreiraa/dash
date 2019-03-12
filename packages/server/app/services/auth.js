require('dotenv').config();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const hash = pass => bcrypt.hash(pass, 10);

const comparePass = (requestPass, userPass) => bcrypt.compare(requestPass, userPass);

const token = ({ id, email }) => {
	let oneDay = 86400;

	return jwt.sign({ id, email }, process.env.SECRET_API_KEY, {
		expiresIn: oneDay
	});
};

const verify = token => {
	return jwt.verify(token, process.env.SECRET_API_KEY, (err, decoded) => {
		if (err) return false;

		return true;
	});
};

export default { hash, comparePass, token, verify };
