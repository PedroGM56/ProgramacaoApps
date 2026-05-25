import { connection } from "../database/db.js";

export const showAll = (req,res) => {
    connection.query('select * from pecas', (err, results) => {
        if(err){
            return res.status(500).send(err)
        }
        return res.status(200).send(results)
    })
    
}

export const createPeca = (req, res) => {
    const {nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque} = req.body;

    connection.query('insert into pecas (nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque) values (?,?,?,?,?,?)',
        [nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque],
        (err, results) => {
            if(err){
                return res.status(500).send(err)
            }
            return res.status(201).send(results)
        }
    )
    
}

export const getById = (req, res) => {
    const {id} = req.params;
    connection.query('select * from pecas where id = ?', [id], (err, results) => {
        if (err){
            return res.status(500).send(err)
        }
        return res.status(200).send(results[0])
    })
}

export const updatePeca = (req, res) => {
    const {id} = req.params;
    const {nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque} = req.body;

    connection.query('update pecas set nome_peca = ?, codigo_peca = ?, fornecedor = ?, quantidade = ?, preco_unitario = ?, estoque = ? where id = ?',
        [nome_peca, codigo_peca, fornecedor, quantidade, preco_unitario, estoque, id], 
        (err, results) => {
            if(err){
                return res.status(500).send(err)
            }
            return res.status(200).send({message: "Peca atualizada"}, results)
        }
    )
}

export const deletePeca = (req, res) => {
    const {id} = req.params;
    connection.query('delete from pecas where id = ?', [id], (err, results) => {
        if(err){
            return res.status(500).send(err)
        }
        return res.status(200).send({message: "Peça deletada"}, results)
    })
}