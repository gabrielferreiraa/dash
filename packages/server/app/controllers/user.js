import transformers from "../helpers/transformers";
import { User } from "../services";

const all = async (request, response) => {
  try {
    const users = await User.all();
    return response.json(users);
  } catch (err) {
    const errors = transformers.errorResponse(err.errors);

    return response.status(400).send({ errors });
  }
};

const add = async (request, response) => {
  try {
    const user = await User.add(request.body);
    return response.json(user);
  } catch (err) {
    const errors = transformers.errorResponse(err.errors);

    return response.status(400).send({ errors });
  }
};

const update = async (request, response) => {
  try {
    const user = await User.update(request.params.userId, request.body);
    return response.json(user);
  } catch (err) {
    const errors = transformers.errorResponse(err.errors);

    return response.status(400).send({ errors });
  }
};

export default { all, add, update };
