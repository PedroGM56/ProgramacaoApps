import express, { Router } from 'express'
import { getPeople, createUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router
    .get('/users', getPeople)
    .post('/register', createUser)
    .put('/update/:id', updateUser)
    .delete('/delete/:id', deleteUser)

export default router