import { Router } from "express";

import * as commentsController from '../controller/commentsController.js'

//Define router object to handle routes
const commentsRouter = Router();

//Comments Routes
commentsRouter.get('/comments', commentsController.index);
commentsRouter.post('/comments', commentsController.store);
commentsRouter.get('/comments/:commentId', commentsController.show);
commentsRouter.put('/comments/:commentId', commentsController.update);
commentsRouter.delete('/comments/:commentId', commentsController.forceDelete);

export default commentsRouter; 