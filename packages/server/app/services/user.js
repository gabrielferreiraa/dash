import Repository from '../repositories';
import { User } from '../models';

const limit = 10;

const all = async page => {
	const { count } = await Repository.findAndCountAll()(User);

	const result = await Repository.all(page, limit)(User);

	return {
		result,
		count,
		pages: Math.ceil(count / limit),
		currentPage: parseInt(page)
	};
};

const add = async data => {
	const user = await Repository.add(data)(User);

	delete user.dataValues.password;

	return user.dataValues;
};

const update = (id, data) => {
	return Repository.update(id, data)(User);
};

const destroy = id => Repository.destroy(id)(User);

export default { all, add, update, destroy };
