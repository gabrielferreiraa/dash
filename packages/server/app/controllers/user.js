import service from '../services';
import userMessages from '../helpers/messages/users';
import tryAwait from '../tools/try-await';
import { User } from '../models';

const all = async (req, res) => {
	const page = req.query.page || 1;

	tryAwait(service.all(page)(User), {
		try: data => res.json(data),
		catch: (err, code) => res.status(code).send(err),
		fallback: userMessages.notPossibleList
	});
};

const add = (req, res) =>
	tryAwait(service.add(req.body)(User), {
		try: data => {
			delete data.password;
			return res.json(data);
		},
		catch: (err, code) => res.status(code).send(err),
		fallback: userMessages.notPossibleAdd
	});

const update = ({ params, body }, res) =>
	tryAwait(service.update(params.userId, body)(User), {
		try: data => res.json(data),
		catch: (err, code) => res.status(code).send(err),
		fallback: userMessages.notPossibleUpdate
	});

const destroy = async ({ params }, res) =>
	tryAwait(service.destroy(params.userId)(User), {
		try: data => res.json(data),
		catch: (err, code) => res.status(code).send(err),
		fallback: userMessages.notPossibleDelete
	});

export default { all, add, update, destroy };
