let data = [];

const server = 'http://localhost:8080';

const form = document.getElementById('formulario');
const table = document.getElementById('table-data');

async function fetchData() {
    const response = await fetch(`${server}/estoque`);
    data = await response.json();

    setTableData();
}

function setTableData() {

    table.innerHTML = '';

    data.forEach((e) => {

        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${e.id}</td>
            <td>${e.nome_peca}</td>
            <td>${e.codigo_peca}</td>
            <td>${e.fornecedor}</td>
            <td>${e.quantidade}</td>
            <td>${e.preco_unitario}</td>
            <td>${e.estoque}</td>

            <td>
                <button onclick="deletePeca(${e.id})">
                    Deletar
                </button>
            </td>
        `;

        table.appendChild(tr);
    });
}

async function deletePeca(id) {

    await fetch(`${server}/estoque/delete/${id}`, {
        method: 'DELETE'
    });

    await fetchData();
}

form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const id = document.getElementById('id').value;
    const nome = document.getElementById('nome').value;
    const codigo = document.getElementById('codigo').value;
    const fornecedor = document.getElementById('fornecedor').value;
    const quantidade = document.getElementById('quantidade').value;
    const preco = document.getElementById('preco').value;
    const estoque = document.getElementById('estoque').value;

    const dataToSend = {
        nome_peca: nome,
        codigo_peca: codigo,
        fornecedor: fornecedor,
        quantidade: quantidade,
        preco_unitario: preco,
        estoque: estoque
    };

    if(id === '') {

        await fetch(`${server}/estoque/criar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        });

    } 

    else {

        await fetch(`${server}/estoque/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        });
    }

    form.reset();

    await fetchData();
});

addEventListener('load', () => {
    fetchData();
});