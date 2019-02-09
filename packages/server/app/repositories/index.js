const all = () => Model => Model.findAll();

const add = data => Model => Model.create(data);

const update = (id, data) => Model =>
	Model.update(data, {
		where: { id },
		returning: true
	});

const destroy = id => Model =>
	Model.destroy({
		where: { id }
	});

const findBy = (field, value) => Model =>
	Model.findAll({
		[field]: value
	});

export default { all, add, update, destroy, findBy };
