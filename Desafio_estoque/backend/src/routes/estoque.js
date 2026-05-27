import express from 'express'
import { showAll, createPeca, getById, updatePeca, deletePeca } from '../controllers/estoqueControllers.js'
import { validateCreatePeca, validateGetId } from '../middlewares/estoqueMiddlewares.js'

const router = express.Router()

    router
        .get('/', showAll)
        .post('/criar', validateCreatePeca, createPeca)
        .get('/:id', validateGetId, getById)
        .put('/update/:id', updatePeca)
        .delete('/delete/:id', deletePeca)
        

export default router