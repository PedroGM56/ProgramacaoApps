const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors({ origin: '*' }));

// Conexão com MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lansamisio',
    database: 'vendas',
    port: 3306
});

// Testar conexão
connection.connect((err) => {
    if (err) {
        console.error('❌ Erro ao conectar no banco:', err);
    } else {
        console.log('✅ Banco de dados conectado!');
    }
});

// Rota teste
app.get('/', (req, res) => {
    res.send('Servidor funcionando corretamente!');
});

app.get('/dados_venda', (req, res) => {
    connection.query('SELECT * FROM dados_venda', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro ao buscar dados' });
        }
        return res.status(200).json(results);
    });
});

app.post('/registrar', (req, res) => {
    const {
        nome_produto,
        categoria_produto,
        quantidade,
        preco_unitario,
        data_venda,
        forma_pagamento,
        nome_vendedor
    } = req.body;

    const qtd = Number(quantidade);
    const preco = Number(preco_unitario);
    const valor_total = qtd * preco;

    // Validação
    if (
        !nome_produto ||
        !categoria_produto ||
        isNaN(qtd) ||
        isNaN(preco)
    ) {
        return res.status(400).json({
            error: 'Dados inválidos'
        });
    }

    const sql = `
        INSERT INTO dados_venda 
        (nome_produto, categoria_produto, quantidade, preco_unitario, valor_total, data_venda, forma_pagamento, nome_vendedor) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(
        sql,
        [nome_produto, categoria_produto, qtd, preco, valor_total, data_venda, forma_pagamento, nome_vendedor],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Erro ao registrar venda' });
            }

            return res.status(201).json({
                message: 'Venda registrada com sucesso',
                valor_total,
                id_venda: results.insertId
            });
        }
    );
});

app.delete('/deletar/:id_venda', (req, res) => {
    const { id_venda } = req.params;

    if (!id_venda) {
        return res.status(400).json({ error: 'ID inválido' });
    }

    connection.query(
        'DELETE FROM dados_venda WHERE id_venda = ?',
        [id_venda],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Erro ao deletar venda' });
            }

            if (results.affectedRows === 0) {
                return res.status(404).json({ error: 'Venda não encontrada' });
            }

            return res.status(200).json({
                message: 'Venda deletada com sucesso'
            });
        }
    );
});

app.put('/atualizar/:id_venda', (req, res) => {
    const { id_venda } = req.params;

    const {
        nome_produto,
        categoria_produto,
        quantidade,
        preco_unitario,
        data_venda,
        forma_pagamento,
        nome_vendedor
    } = req.body;

    const qtd = Number(quantidade);
    const preco = Number(preco_unitario);
    const valor_total = qtd * preco;

    // Validação
    if (
        !id_venda ||
        !nome_produto ||
        !categoria_produto ||
        isNaN(qtd) ||
        isNaN(preco)
    ) {
        return res.status(400).json({
            error: 'Dados inválidos para atualização'
        });
    }

    const sql = `
        UPDATE dados_venda 
        SET 
            nome_produto = ?, 
            categoria_produto = ?, 
            quantidade = ?, 
            preco_unitario = ?, 
            valor_total = ?, 
            data_venda = ?, 
            forma_pagamento = ?, 
            nome_vendedor = ?
        WHERE id_venda = ?
    `;

    connection.query(
        sql,
        [
            nome_produto,
            categoria_produto,
            qtd,
            preco,
            valor_total,
            data_venda,
            forma_pagamento,
            nome_vendedor,
            id_venda
        ],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Erro ao atualizar venda' });
            }

            if (results.affectedRows === 0) {
                return res.status(404).json({ error: 'Venda não encontrada' });
            }

            return res.status(200).json({
                message: 'Venda atualizada com sucesso',
                valor_total
            });
        }
    );
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


