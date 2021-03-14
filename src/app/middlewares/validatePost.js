/* eslint-disable camelcase */
import Post from '../models/Post';

export default async (request, response, next) => {
  const { id } = request.params;

  const post = await Post.findByPk(id);
  if (!post) {
    return response.status(400).json({ message: 'Post not found' });
  }
  return next();
};
