import { Router } from 'express';

import UserController from '../controllers/UserController';

const routes = new Router();

routes.get('/user', UserController.index);
routes.get('/user/:uid', UserController.show);
routes.post('/user', UserController.store);
routes.put('/user/:uid', UserController.update);
routes.delete('/user/:uid', UserController.delete);

export default routes;
