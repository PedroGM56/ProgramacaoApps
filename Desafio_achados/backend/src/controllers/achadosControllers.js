import {connection} from '../database/db.js'

export const showAll = (req, res) => {
    connection.query('select * from objeto', (err, results) => {
        if(err){
            return res.status(500).send(err)
        }
        return res.status(200).send(results)
    })
}

export const createObjeto = (req, res) => {
    const {nome, local_encontrado, data_encontrado, status_objeto, descricao} = req.body;

    connection.query('insert into objeto (nome, local_encontrado, data_encontrado, status_objeto, descricao) values (?,?,?,?,?)',
        [nome, local_encontrado, data_encontrado, status_objeto, descricao], (err, results) => {
            if(err){
                return res.status(500).send(err)
            }
            return res.status(201).send(results)
        }
    )
}

export const changeStatus = (req, res) => {
    const {id} = req.params
    const {status_objeto} = req.body

    connection.query('update objeto set status_objeto = ? where id = ?', [status_objeto, id], (err, results) => {
        if(err){
            return res.status(500).send(err)
        }
        return res.status(201).send(results)
    })
}

export const deleteObjeto = (req, res) => {
    const {id} = req.params
    
    connection.query('delete from objeto where id = ?', [id], (err, results) => {
        if (err){
            return res.status(500).send(err)
        }
        return res.status(201).send(results)
    })
}

export const showPendentes30Dias = (req, res) => {

    connection.query(
        `
        SELECT *
        FROM objeto
        WHERE status_objeto = 'Pendente'
        AND DATEDIFF(CURDATE(), data_encontrado) > 30
        `,
        (err, results) => {

            if(err){
                return res.status(500).send(err);
            }

            return res.status(200).send(results);
        }
    );
}