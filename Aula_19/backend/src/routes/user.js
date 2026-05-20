import express, { Router } from 'express'
import { getPeople, createUser, updateUser, deleteUser } from '../controllers/userController.js';
import { validateRegister } from '../middlewares/userMiddleware.js';

const router = express.Router();

router
    .get('/users', getPeople)
    .post('/register', validateRegister, createUser)
    .put('/update/:id', updateUser)
    .delete('/delete/:id', deleteUser)

export default router