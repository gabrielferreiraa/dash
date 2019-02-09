import Repository from '../repositories';
import { User } from '../models';

const all = () => Repository.all()(User);

const add = data => Repository.add(data)(User);

const update = (id, data) => {
	return Repository.update(id, data)(User);
};

const destroy = id => Repository.destroy(id)(User);

export default { all, add, update, destroy };
