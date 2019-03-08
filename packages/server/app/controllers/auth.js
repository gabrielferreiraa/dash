import service from '../services/user';
import Auth from '../services/auth';
import authMessages from '../helpers/messages/auth';

const signIn = async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await service.getUser(email);

		if (!user) {
			return res.status(404).send(authMessages.userNotFound);
		}

		const isValidPass = await Auth.comparePass(password, user.password);
		if (!isValidPass) {
			return res.status(404).send(authMessages.userNotFound);
		}

		const token = Auth.token(user);

		return res.json({ auth: true, token });
	} catch (err) {
		res.status(500).send(authMessages.default);
		throw new Error(err.message);
	}
};

export default { signIn };
