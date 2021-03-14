/* eslint-disable camelcase */
import PostType from '../models/PostType';

export default async (request, response, next) => {
  const { type_id } = request.body;

  const postType = await PostType.findByPk(type_id);
  if (!postType) {
    return response.status(400).json({ message: 'Post type not found' });
  }
  return next();
};
