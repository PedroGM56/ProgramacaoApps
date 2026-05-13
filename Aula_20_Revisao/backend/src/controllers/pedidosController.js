const pedidos = []

export function todosOsPedidos(req, res){
    return res.status(200).send(pedidos)
}

export function umPedidoSo(req, res){
    const { id } = req.params
    const pedidoEncontrado = pedidos.find((id) => id == pedidos.id)
    return res.status(200).send(pedidoEncontrado) 
}

export function novoPedido(req, res){
    const { id, cliente, itens, status } = req.body

    const pedido = pedidos.push({
        id,
        cliente,
        itens,
        status,
        total: itens.reduce((prev, acc) => {
            const total = acc.quantidade * acc.valor
            return prev += total
        }, 0)
    })

    return res.status(200).send(pedido)

    console.log(id, cliente, itens, status)

}

export function atualizarPedido(req,res){
    const { id, cliente, itens, status } = req.body
}

export function deletarPedido(req, res){
    const { id } = req.params
}