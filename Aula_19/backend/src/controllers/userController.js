import { connection } from "../database/db.js";

export const getPeople = (req, res) => {

    connection.query('SELECT * FROM users', (err, results) => {

        if (err) {
            return res.status(500).send({
                response: 'Ocorreu algum erro'
            });
        }

        return res.status(200).send(results);
    });
};

export const createUser = (req, res) => {

    const { nome, email, senha } = req.body;

    connection.query(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [nome, email, senha],

        (err, results) => {

            if (err) {
                return res.status(500).send({
                    response: "Ocorreu um erro", err
                });
            }

            return res.status(201).send({
                message: "Usuário criado com sucesso",
                results
            });
        }
    );
};

export const updateUser = (req, res) => {

    const { id } = req.params;
    const { nome, email, senha } = req.body;

    connection.query(
        'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
        [nome, email, senha, id],

        (err, results) => {

            if (err) {
                return res.status(500).send({
                    message: "Ocorreu algum erro"
                });
            }

            return res.status(200).send({
                message: "Usuário atualizado com sucesso",
                results
            });
        }
    );
};

export const deleteUser = (req, res) => {

    const { id } = req.params;

    connection.query(
        'DELETE FROM users WHERE id = ?',
        [id],

        (err, results) => {

            if (err) {
                return res.status(500).send({
                    message: "Ocorreu um erro"
                });
            }

            return res.status(200).send({
                message: "Usuário deletado com sucesso",
                results
            });
        }
    );
};

