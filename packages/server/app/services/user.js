import Repository from '../repositories';
import { User } from '../models';

const getUser = async email => await Repository.findFirstBy('email', email)(User);

export default { getUser };
