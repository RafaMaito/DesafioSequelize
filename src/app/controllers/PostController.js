/* eslint-disable radix */
/* eslint-disable camelcase */
import { validate as uuidValidate } from 'uuid';

import Post from '../models/Post';
import PostType from '../models/PostType';
import User from '../models/User';

class PostController {
  async index(request, response) {
    const { page, limit } = request.query;

    if (!page || !limit) {
      return response.status(400).json({ message: 'Ivalid params' });
    }

    const posts = await Post.findAndCountAll({
      limit,
      offset: limit * (page - 1),
    });

    const newPosts = posts.rows.map(post => {
      const postType = PostType.findByPk(post.type_id);
      const newPost = {
        content: post.content,
        type: postType.name,
      };
      return newPost;
    });
    return response.json({ NumberofUsers: posts.count, Posts: newPosts });
  }

  async show(request, response) {
    const { id } = request.params;
    const parsed = Number.parseInt(id);

    if (Number.isNaN(parsed)) {
      return response.status(400).json({ message: 'Invalid ID' });
    }

    const post = await Post.findByPk(id);
    if (!post) {
      return response.status(400).json({ message: 'Post not found' });
    }
    const postType = await PostType.findByPk(post.type_id);

    return response
      .status(202)
      .json({ content: post.content, type: postType.name });
  }

  async store(request, response) {
    const { content, user_uid, type_id } = request.body;

    if (!content || !user_uid || !type_id) {
      return response.status(400).json({ message: 'Please, fill all fields' });
    }
    if (!uuidValidate(user_uid)) {
      return response.status(400).json({ message: 'Ivalid ID' });
    }
    const parsedType = Number.parseInt(type_id);

    if (Number.isNaN(parsedType)) {
      return response.status(400).json({ message: 'Invalid TypeID' });
    }

    const user = await User.findByPk(user_uid);
    if (!user) {
      return response.status(400).json({ message: 'User not found' });
    }

    const postType = await PostType.findByPk(type_id);
    if (!postType) {
      return response.status(400).json({ message: 'Post type not found' });
    }

    const post = await Post.create({ content, user_uid, type_id });

    return response.json({ content: post.content, type: postType.name });
  }

  async update(request, response) {
    const { content, type_id } = request.body;
    const { id } = request.params;
    const parsed = Number.parseInt(id);
    const parsedType = Number.parseInt(type_id);

    if (Number.isNaN(parsed)) {
      return response.status(400).json({ message: 'Invalid ID' });
    }
    if (Number.isNaN(parsedType)) {
      return response.status(400).json({ message: 'Invalid TypeID' });
    }

    if (!content || !type_id) {
      return response.status(400).json({ message: 'Please, fill all fields' });
    }
    const postType = await PostType.findByPk(type_id);
    if (!postType) {
      return response.status(400).json({ message: 'Post type not found' });
    }

    const post = await Post.findByPk(id);
    if (!post) {
      return response.status(400).json({ message: 'Post not found' });
    }
    post.content = content;
    post.type_id = type_id;
    post.save();

    return response.json({ content: post.content, type: postType.name });
  }

  async delete(request, response) {
    const { id } = request.params;
    const parsed = Number.parseInt(id);

    if (Number.isNaN(parsed)) {
      return response.status(400).json({ message: 'Invalid ID' });
    }

    const post = await Post.findByPk(id);
    if (!post) {
      return response.status(400).json({ message: 'Post not found' });
    }

    post.destroy();
    return response.status(202).json({ message: 'Post deleted' });
  }
}

export default new PostController();
