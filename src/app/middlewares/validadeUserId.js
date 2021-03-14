import { validate as uuidValidate } from 'uuid';

export default (request, response, next) => {
  const { uid } = request.params;

  if (!uuidValidate(uid)) {
    return response.status(400).json({ message: 'Ivalid ID' });
  }

  return next();
};
