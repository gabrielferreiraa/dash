import transformers from '../helpers/transformers';

const parse = fallback => {
	try {
		return JSON.parse(fallback);
	} catch (err) {
		return fallback;
	}
};

/**
 * Método responsável por abstrair os retornos de erro da API
 *
 * @param {*} result
 * @param {*} callback
 */
const tryAwait = async (result, callback) => {
	try {
		const data = await result;
		return callback.try(data);
	} catch (err) {
		if (!!err.errors) {
			const response = parse(transformers.errorResponse(err.errors).shift());
			return callback.catch(response, 400);
		}

		callback.catch(parse(callback.fallback), 500);
		throw new Error(err.message);
	}
};

export default tryAwait;
