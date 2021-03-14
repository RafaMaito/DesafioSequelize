import { v4 as uuidv4, validate as uuidValidate } from 'uuid';

import User from '../models/User';
import Post from '../models/Post';

class UserController {
  async index(request, response) {
    const { page, limit } = request.query;

    if (!page || !limit) {
      return response.status(400).json({ message: 'Ivalid params' });
    }

    const users = await User.findAndCountAll({
      limit,
      offset: limit * (page - 1),
    });

    const newUsers = users.rows.map(user => {
      const newUser = {
        name: user.name,
        email: user.email,
      };
      return newUser;
    });

    return response.json({ NumberofUsers: users.count, Users: newUsers });
  }

  async show(request, response) {
    const { uid } = request.params;

    if (!uuidValidate(uid)) {
      return response.status(400).json({ message: 'Ivalid ID' });
    }

    const user = await User.findByPk(uid);

    if (!user) {
      return response.status(400).json({ message: 'User not found' });
    }

    return response.json({ name: user.name, email: user.email });
  }

  async store(request, response) {
    const { name, email } = request.body;

    if (!name || !email) {
      return response.status(400).json({ message: 'Please, fill all fields' });
    }

    const uid = uuidv4();

    const user = await User.create({ uid, name, email });

    return response.json(user);
  }

  async update(request, response) {
    const { name, email } = request.body;
    const { uid } = request.params;
    if (!uuidValidate(uid)) {
      return response.status(400).json({ message: 'Ivalid ID' });
    }
    if (!name || !email) {
      return response.status(400).json({ message: 'Please, fill all fields' });
    }

    const user = await User.findByPk(uid);
    if (!user) {
      return response.status(400).json({ message: 'User not found' });
    }
    user.name = name;
    user.email = email;
    user.save();

    return response.json(user);
  }

  async delete(request, response) {
    const { uid } = request.params;

    if (!uuidValidate(uid)) {
      return response.status(400).json({ message: 'Invalid ID' });
    }

    const user = await User.findByPk(uid);

    if (!user) {
      return response.status(400).json({ message: 'User not found' });
    }

    await Post.destroy({
      where: {
        user_uid: uid,
      },
    });

    await user.destroy();
    return response.status(202).json({ message: 'User deleted' });
  }
}

export default new UserController();
