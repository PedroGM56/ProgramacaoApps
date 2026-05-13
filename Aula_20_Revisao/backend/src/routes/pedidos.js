import express from 'express'
import { atualizarPedido, deletarPedido, novoPedido, todosOsPedidos, umPedidoSo } from '../controllers/pedidosController.js'

const router = express.Router()

    router
        .get('/', todosOsPedidos)
        .get('/:id', umPedidoSo)
        .post('/', novoPedido)
        .put('/:id', atualizarPedido)
        .delete('/:id', deletarPedido)

export default router