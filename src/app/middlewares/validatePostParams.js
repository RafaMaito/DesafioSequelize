/* eslint-disable camelcase */
/* eslint-disable radix */
export default (request, response, next) => {
  const { content, user_uid, type_id } = request.body;
  if (user_uid) {
    if (!content || !user_uid || !type_id) {
      return response.status(400).json({ message: 'Please, fill all fields' });
    }
  }
  if (!content || !type_id) {
    return response.status(400).json({ message: 'Please, fill all fields' });
  }

  const parsedType = Number.parseInt(type_id);

  if (Number.isNaN(parsedType)) {
    return response.status(400).json({ message: 'Invalid TypeID' });
  }
  return next();
};
