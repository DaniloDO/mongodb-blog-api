import { Router } from "express";

import { authentication } from "../middleware/auth.js";
import * as usersController from '../controller/usersController.js'

//Define router object to handle routes
const usersRouter = Router();

//Users Routes
usersRouter.get('/users', usersController.index);
usersRouter.post('/users', usersController.store);
usersRouter.get('/users/:userId', usersController.show);
usersRouter.put('/users/:userId', authentication, usersController.update);
usersRouter.delete('/users/:userId', authentication, usersController.forceDelete);

//Authentication routes
usersRouter.post('/users/login', usersController.login);

export default usersRouter; 