/* eslint-disable camelcase */
import User from '../models/User';

export default async (request, response, next) => {
  const { uid } = request.params;
  const { user_uid } = request.body;
  if (uid) {
    const user = await User.findByPk(uid);

    if (!user) {
      return response.status(400).json({ message: 'User not found' });
    }
  }
  if (user_uid) {
    const user = await User.findByPk(user_uid);
    if (!user) {
      return response.status(400).json({ message: 'User not found' });
    }
  }

  return next();
};
