import { Router } from 'express';

import UserController from '../controllers/UserController';
import validateUserId from '../middlewares/validateUserId';
import validateUserParams from '../middlewares/validateUserParams';
import validateUser from '../middlewares/validateUser';
import validateIndex from '../middlewares/validateIndex';

const routes = new Router();

routes.get('/user', validateIndex, UserController.index);
routes.get('/user/:uid', [validateUserId, validateUser], UserController.show);
routes.post('/user', validateUserParams, UserController.store);
routes.put(
  '/user/:uid',
  [validateUserId, validateUserParams, validateUser],
  UserController.update
);
routes.delete(
  '/user/:uid',
  [validateUserId, validateUser],
  UserController.delete
);

export default routes;
