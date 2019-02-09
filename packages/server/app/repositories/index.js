const all = (page, limit) => Model =>
	Model.findAll({
		limit,
		offset: limit * (page - 1)
	});

const add = data => Model => Model.create(data);

const update = (id, data) => Model =>
	Model.update(data, {
		where: { id },
		individualHooks: true
	});

const destroy = id => Model =>
	Model.destroy({
		where: { id }
	});

const findBy = (field, value) => Model =>
	Model.findAll({
		[field]: value
	});

const findAndCountAll = () => Model => Model.findAndCountAll();

export default { all, add, update, destroy, findBy, findAndCountAll };
