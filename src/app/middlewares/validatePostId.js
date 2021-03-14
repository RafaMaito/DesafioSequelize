/* eslint-disable radix */
export default (request, response, next) => {
  const { id } = request.params;
  const parsed = Number.parseInt(id);

  if (Number.isNaN(parsed)) {
    return response.status(400).json({ message: 'Invalid ID' });
  }

  return next();
};
