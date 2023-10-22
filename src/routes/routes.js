import { Router } from "express";

import * as usersController from '../controller/usersController.js'
import * as postsController from '../controller/postsController.js'

const router = Router();

router.get('/', (req, res) => res.send({response: 'users active'}));

//Users Routes
router.get('/users/index', usersController.index);
router.post('/users/store', usersController.store);
router.get('/users/show/:userId', usersController.show);
router.put('/users/update/:userId', usersController.update);
router.delete('/users/delete/:userId', usersController.forceDelete);

//Posts Routes
router.get('/posts/index', postsController.index);
router.post('/posts/store', postsController.store);
router.get('/posts/show/:postId', postsController.show);
router.put('/posts/update/:postId', postsController.update);
router.delete('/posts/delete/:postId', postsController.forceDelete);

export default router; 