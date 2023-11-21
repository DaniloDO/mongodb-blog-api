import { Router } from "express";

import * as postsController from '../controller/postsController.js'

//Define router object to handle routes
const postsRouter = Router();

//Posts Routes
postsRouter.get('/posts', postsController.index);
postsRouter.post('/posts', postsController.store);
postsRouter.get('/posts/:postId', postsController.show);
postsRouter.put('/posts/:postId', postsController.update);
postsRouter.delete('/posts/:postId', postsController.forceDelete);

export default postsRouter; 