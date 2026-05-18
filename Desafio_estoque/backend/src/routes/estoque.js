import express from 'express'
import { showAll, createPeca, getById, updatePeca, deletePeca } from '../controllers/estoqueControllers.js'

const router = express.Router()

    router
        .get('/', showAll)
        .post('/criar', createPeca)
        .get('/:id', getById)
        .put('/update/:id', updatePeca)
        .delete('/delete/:id', deletePeca)

export default router