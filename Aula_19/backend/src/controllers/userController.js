import {connection} from "../database/db.js";

export const getPeople = (req, res) => {
    const users = connection.query('SELECT * FROM user', (err, results) => {
        if(err){
            return res.status(500).send({response: 'Ocorreu algum erro'})
        }
        res.status(200).send(results)
    })
    
};

export const createUser = (req,res) => {
    const{name} = req.body;
    try{
        people.push({name})
        return res.status(200).send({response: "Usuário registrado"})
    }
    catch{
        return res.status(500).send({response: "Erro ao registrar"})
    }
}

