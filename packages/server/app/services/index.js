import Repository from '../repositories';

const limit = 10;

const all = page => async Model => {
	const { count } = await Repository.findAndCountAll()(Model);

	const result = await Repository.all(page, limit)(Model);

	return {
		result,
		count,
		pages: Math.ceil(count / limit),
		currentPage: parseInt(page)
	};
};

const add = data => async Model => {
	const result = await Repository.add(data)(Model);

	return result.dataValues;
};

const update = (id, data) => async Model => await Repository.update(id, data)(Model);

const destroy = id => async Model => await Repository.destroy(id)(Model);

export default { all, add, update, destroy };
