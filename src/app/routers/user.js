import { Router } from 'express';

import UserController from '../controllers/UserController';
import validedeUserId from '../middlewares/validadeUserId';
import validadeUserParams from '../middlewares/validadeUserParams';
import validadeUser from '../middlewares/validadeUser';
import validadeIndex from '../middlewares/validadeIndex';

const routes = new Router();

routes.get('/user', validadeIndex, UserController.index);
routes.get('/user/:uid', [validedeUserId, validadeUser], UserController.show);
routes.post('/user', validadeUserParams, UserController.store);
routes.put(
  '/user/:uid',
  [validedeUserId, validadeUserParams, validadeUser],
  UserController.update
);
routes.delete(
  '/user/:uid',
  [validedeUserId, validadeUser],
  UserController.delete
);

export default routes;
