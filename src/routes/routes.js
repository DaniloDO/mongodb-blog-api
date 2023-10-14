import { Router } from "express";

import * as usersController from '../controller/usersController.js'

const router = Router();

router.get('/', (req, res) => res.send({response: 'users active'}));

//Users Routes
router.get('/users/index', usersController.index);
router.post('/users/store', usersController.store);
router.get('/users/show', usersController.show);
router.put('/users/update', usersController.update);
router.delete('/users/delete', usersController.forceDelete);
router.post('/users/restore', usersController.restore);

export default router; 