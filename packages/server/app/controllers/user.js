import { User } from '../services';
import userMessages from '../helpers/messages/users';
import tryAwait from '../tools/try-await';

const all = async (req, res) => {
	const page = req.query.page || 1;

	tryAwait(User.all(page), {
		try: data => res.json(data),
		catch: (err, code) => res.status(code).send(err),
		fallback: userMessages.notPossibleList
	});
};

const add = (req, res) =>
	tryAwait(User.add(req.body), {
		try: data => res.json(data),
		catch: (err, code) => res.status(code).send(err),
		fallback: userMessages.notPossibleAdd
	});

const update = ({ params, body }, res) =>
	tryAwait(User.update(params.userId, body), {
		try: data => res.json(data),
		catch: (err, code) => res.status(code).send(err),
		fallback: userMessages.notPossibleUpdate
	});

const destroy = async ({ params }, res) =>
	tryAwait(User.destroy(params.userId), {
		try: data => res.json(data),
		catch: (err, code) => res.status(code).send(err),
		fallback: userMessages.notPossibleDelete
	});

export default { all, add, update, destroy };
