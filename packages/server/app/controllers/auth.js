import transformers from '../helpers/transformers';
import { Auth, User } from '../services';

const signIn = async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await User.getUser(email);

		if (!user) {
			return res.status(404).send('Não foi encontrado usuário com esse e-mail e senha');
		}

		const isValidPass = await Auth.comparePass(password, user.password);
		if (!isValidPass) {
			return res.status(404).send('Não foi encontrado usuário com esse e-mail e senha');
		}

		const token = Auth.token(user);

		return res.json({ auth: true, token });
	} catch (err) {
		const errors = transformers.errorResponse(err.errors);

		return res.status(400).send({ errors });
	}
};

export default { signIn };
