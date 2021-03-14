import { Router } from 'express';

import PostController from '../controllers/PostController';

const routes = new Router();

routes.get('/post', PostController.index);
routes.get('/post/:id', PostController.show);
routes.post('/post', PostController.store);
routes.put('/post/:id', PostController.update);
routes.delete('/post/:id', PostController.delete);

export default routes;
