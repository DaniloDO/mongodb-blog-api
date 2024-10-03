import { Router } from "express";

import * as categoriesController from '../controller/categoriesController.js'
import { authentication } from "../middleware/auth.js";

//Define router object to handle routes
const categoriesRouter = Router();

//Categories Routes
categoriesRouter.get('/categories', categoriesController.index);
categoriesRouter.post('/categories', categoriesController.store);
categoriesRouter.get('/categories/:categoryId', categoriesController.show);
categoriesRouter.put('/categories/:categoryId', authentication, categoriesController.update);
categoriesRouter.delete('/categories/:categoryId', authentication, categoriesController.forceDelete);

export default categoriesRouter; 