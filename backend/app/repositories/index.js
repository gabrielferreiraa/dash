const all = () => Model => Model.findAll();

const add = data => Model => Model.create(data);

const update = (id, data) => Model =>
  Model.update(data, {
    where: { id },
    returning: true
  });

export default { all, add, update };
