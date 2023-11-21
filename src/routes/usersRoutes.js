import { Router } from "express";

import * as usersController from '../controller/usersController.js'

//Define router object to handle routes
const usersRouter = Router();

//Users Routes
usersRouter.get('/users', usersController.index);
usersRouter.post('/users', usersController.store);
usersRouter.get('/users/:userId', usersController.show);
usersRouter.put('/users/:userId', usersController.update);
usersRouter.delete('/users/:userId', usersController.forceDelete);

export default usersRouter; 