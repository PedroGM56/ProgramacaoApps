import { connection } from "../database/db.js";

export async function validateObjeto(req, res, next){
    const {nome, local_encontrado, data_encontrado, status_objeto, descricao} = req.body;
    const hoje = new Date().toISOString().split('T')[0];

    if(!nome || nome.trim() === "" || nome.length < 3){
        return res.status(400).send({response: "Nome inválido"})
    }

    if(!local_encontrado || local_encontrado.trim()==="" || local_encontrado.length < 3){
        return res.status(400).send({response: "Local inválido"})
    }

    if(!data_encontrado || data_encontrado.trim()==="" || data_encontrado > hoje){
        return res.status(400).send({response: "Data inválida"})
    }

    if(!status_objeto || status_objeto.trim()===""){
        return res.status(400).send({response: "Status inválido"})
    }

    if(!descricao || descricao.trim()===""){
        return res.status(400).send({response: "Descrição inválida"})
    }

    next()
}

export async function validateUpdate(req, res, next) {
    const { id } = req.params;

    const [rows] = await connection.promise().query(
        "SELECT status_objeto FROM objeto WHERE id = ?",
        [id]
    );

    if (rows.length === 0) {
        return res.status(404).send({
            response: "Objeto não encontrado"
        });
    }

    if (rows[0].status_objeto === "Entregue") {
        return res.status(400).send({
            response: "Objeto já entregue não pode ser alterado"
        });
    }

    next();
}

