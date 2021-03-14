export default (request, response, next) => {
  const { name, email } = request.body;

  if (!name || !email) {
    return response.status(400).json({ message: 'Please, fill all fields' });
  }

  return next();
};
