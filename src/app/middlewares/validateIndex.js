/* eslint-disable radix */
export default (request, response, next) => {
  const { page, limit } = request.query;

  if (!page || !limit) {
    return response.status(400).json({ message: 'Ivalid params' });
  }
  const parsedPage = Number.parseInt(page);
  const parsedLimit = Number.parseInt(limit);

  if (Number.isNaN(parsedPage) || Number.isNaN(parsedLimit)) {
    return response.status(400).json({ message: 'Ivalid params' });
  }

  return next();
};
