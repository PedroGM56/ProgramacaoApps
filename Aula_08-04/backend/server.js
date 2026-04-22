const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const  port = 8080;

app.use(express.json())
app.use(cors({
    origin: '*'
}))

const connection = mysql.createConnection({
    user: 'root',
    password: 'lansamisio',
    host: 'localhost',
    database: 'aula_add',
    port: 3306
})

if(connection){
    console.log('Banco de dados rodando')
}

app.get('/', (req, res) => {
    return res.send('Servidor funcionando corretamente!')
})

app.get('/usuarios', (req, res) => {
    connection.query('SELECT * FROM usuarios', (err, results) => {
        if(err){
            return 
        }
        res.status(200).send(results)
    })
    
})

app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params
    connection.query('SELECT * FROM usuarios WHERE id = ?', 
        [id], 
        (err, results) => {
            if(err){
                return 
            }
            return res.status(200).send(results)
    })
})

app.post('/registro', (req, res) =>{
    const {nome, email, senha} = req.body
    connection.query('INSERT INTO usuarios (nome, email, senha) VALUES (?,?,?)', 
        [nome, email, senha],
        (err, results) => {
            if(err){
                return err
            }
           return res.status(200).send({response: 'Usuário registrado'})
        }
    )
})

app.delete('/deletar/:id', (req, res) => {
    const { id } = req.params
    try{
        connection.query('DELETE FROM usuarios WHERE id = ?', [id])
        return res.status(200).send({message: 'Usuário deletado com sucesso'})
    }
    catch(e){
        return res.status(500).send({error:e})
    }
});

app.put('/atualizar/:id', (req,res) => {
    const { id } = req.params
    const {nome, email, senha} = req.body
    try{
        connection.query('UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?', 
            [nome, email, senha, id]
        )
        return res.status(200).send({message: "Usuário atualizado com sucesso"})
    }
    catch{
        return res.status(500).send({error: "Ocorreu um erro ao atualizar"})
    }
});

app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:8080')
})

app.get('/aprendiz', (req, res) => {
    connection.query('SELECT * FROM aprendiz', (err, results) => {
        if(err){
            return 
        }
        res.status(200).send(results)
    })
    
})

app.post('/registro_aprendiz', (req, res) =>{
    const {nome, setor, idade} = req.body
    connection.query('INSERT INTO aprendiz (nome, setor, idade) VALUES (?,?,?)', 
        [nome, setor, idade],
        (err, results) => {
            if(err){
                return err
            }
           return res.status(201).send({response: 'Aprendiz registrado'})
        })
})