const all = () => Model => Model.findAll();

const add = data => Model => Model.create(data);

const update = (id, data) => Model =>
	Model.update(data, {
		where: { id },
		returning: true
	});

const findBy = (field, value) => Model =>
	Model.findAll({
		[field]: value
	});

export default { all, add, update, findBy };
