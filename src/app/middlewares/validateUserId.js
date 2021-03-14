/* eslint-disable camelcase */
import { validate as uuidValidate } from 'uuid';

export default (request, response, next) => {
  const { uid } = request.params;
  const { user_uid } = request.body;

  if (uid) {
    if (!uuidValidate(uid)) {
      return response.status(400).json({ message: 'Ivalid ID' });
    }
  }

  if (user_uid) {
    if (!uuidValidate(user_uid)) {
      return response.status(400).json({ message: 'Ivalid ID' });
    }
  }

  return next();
};
