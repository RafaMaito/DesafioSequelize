import { Router } from 'express';

import PostController from '../controllers/PostController';
import validatePostId from '../middlewares/validatePostId';
import validateUserId from '../middlewares/validateUserId';
import validatePostParams from '../middlewares/validatePostParams';
import validatePostType from '../middlewares/validatePostType';
import validatePost from '../middlewares/validatePost';
import validateUser from '../middlewares/validateUser';
import validateIndex from '../middlewares/validateIndex';

const routes = new Router();

routes.get('/post', validateIndex, PostController.index);
routes.get('/post/:id', [validatePostId], PostController.show);
routes.post(
  '/post',
  [validatePostParams, validateUserId, validateUser, validatePostType],
  PostController.store
);
routes.put(
  '/post/:id',
  [validatePostId, validatePostParams, validatePostType, validatePost],
  PostController.update
);
routes.delete(
  '/post/:id',
  [validatePostId, validatePost],
  PostController.delete
);

export default routes;
