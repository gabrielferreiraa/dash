const errorResponse = errors => errors.map(error => error.message || error.msg);

export default { errorResponse };
