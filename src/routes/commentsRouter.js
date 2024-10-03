import { Router } from "express";

import * as commentsController from '../controller/commentsController.js'
import { authentication } from "../middleware/auth.js";

//Define router object to handle routes
const commentsRouter = Router();

//Comments Routes
commentsRouter.get('/comments', commentsController.index);
commentsRouter.post('/comments', commentsController.store);
commentsRouter.get('/comments/:commentId', commentsController.show);
commentsRouter.put('/comments/:commentId', authentication, commentsController.update);
commentsRouter.delete('/comments/:commentId', authentication, commentsController.forceDelete);

export default commentsRouter; 