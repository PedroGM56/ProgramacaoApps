import express from 'express'
import { showAll, createObjeto, changeStatus, deleteObjeto, showPendentes30Dias } from '../controllers/achadosControllers.js'
import { validateObjeto, validateUpdate } from '../middlewares/achadosMiddlewares.js'

const router = express.Router()

    router
        .get('/', showAll)
        .post('/cadastrar', validateObjeto, createObjeto)
        .put('/status/:id', validateUpdate, changeStatus)
        .delete('/deletar/:id', deleteObjeto)
        .get('/pendentes', showPendentes30Dias);

export default router