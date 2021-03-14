import User from '../models/User';

export default async (request, response, next) => {
  const { uid } = request.params;

  const user = await User.findByPk(uid);

  if (!user) {
    return response.status(400).json({ message: 'User not found' });
  }

  return next();
};
