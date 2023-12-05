import { Router } from "express";

import * as postsController from '../controller/postsController.js'
import { authentication } from "../middleware/auth.js";

//Define router object to handle routes
const postsRouter = Router();

//Posts Routes
postsRouter.get('/posts', postsController.index);
postsRouter.post('/posts', postsController.store);
postsRouter.get('/posts/:postId', postsController.show);
postsRouter.put('/posts/:postId', authentication, postsController.update);
postsRouter.delete('/posts/:postId', authentication, postsController.forceDelete);

export default postsRouter; 