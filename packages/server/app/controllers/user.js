import transformers from '../helpers/transformers';
import { User } from '../services';

const all = async (req, res) => {
	try {
		const users = await User.all();
		return res.json(users);
	} catch (err) {
		const errors = transformers.errorResponse(err.errors);

		return res.status(400).send({ errors });
	}
};

const add = async (req, res) => {
	try {
		const user = await User.add(req.body);
		return res.json(user);
	} catch (err) {
		const errors = transformers.errorResponse(err.errors);

		return res.status(400).send({ errors });
	}
};

const update = async (req, res) => {
	try {
		const user = await User.update(req.params.userId, req.body);
		return res.json(user);
	} catch (err) {
		const errors = transformers.errorResponse(err.errors);

		return res.status(400).send({ errors });
	}
};

export default { all, add, update };
