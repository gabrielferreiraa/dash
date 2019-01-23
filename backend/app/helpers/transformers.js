const errorResponse = errors => {
  return errors.map(error => error.message);
};

export default { errorResponse };
