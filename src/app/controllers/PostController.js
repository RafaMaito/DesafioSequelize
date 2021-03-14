/* eslint-disable radix */
/* eslint-disable camelcase */
import Post from '../models/Post';
import PostType from '../models/PostType';

class PostController {
  async index(request, response) {
    const { page, limit } = request.query;

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

    const post = await Post.findByPk(id);
    const postType = await PostType.findByPk(post.type_id);

    return response
      .status(202)
      .json({ content: post.content, type: postType.name });
  }

  async store(request, response) {
    const { content, user_uid, type_id } = request.body;

    const postType = await PostType.findByPk(type_id);

    const post = await Post.create({ content, user_uid, type_id });

    return response.json({ content: post.content, type: postType.name });
  }

  async update(request, response) {
    const { content, type_id } = request.body;
    const { id } = request.params;

    const postType = await PostType.findByPk(type_id);
    const post = await Post.findByPk(id);

    post.content = content;
    post.type_id = type_id;
    post.save();

    return response.json({ content: post.content, type: postType.name });
  }

  async delete(request, response) {
    const { id } = request.params;

    const post = await Post.findByPk(id);

    post.destroy();
    return response.status(202).json({ message: 'Post deleted' });
  }
}

export default new PostController();
