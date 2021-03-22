export default (request, response, next) => {
  const { name, email, password } = request.body;

  if (!name || !email || !password) {
    return response.status(400).json({ message: 'Please, fill all fields' });
  }

  return next();
};
