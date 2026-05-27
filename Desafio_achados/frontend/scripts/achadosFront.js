let data = [];

const server = 'http://localhost:8080';

const form = document.getElementById('formulario');
const table = document.getElementById('table-data');

async function fetchData() {

    const response = await fetch(`${server}/achados`);

    data = await response.json();

    setTableData();
}

function setTableData() {

    table.innerHTML = '';

    data.forEach((e) => {

        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${e.id}</td>
            <td>${e.nome}</td>
            <td>${e.local_encontrado}</td>
            <td>${e.data_encontrado}</td>
            <td>${e.status_objeto}</td>
            <td>${e.descricao}</td>

            <td>
                <button onclick="deleteObjeto(${e.id})">
                    Deletar
                </button>
            </td>
        `;

        table.appendChild(tr);
    });
}

async function deleteObjeto(id) {

    await fetch(`${server}/achados/deletar/${id}`, {
        method: 'DELETE'
    });

    await fetchData();
}

form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const id = document.getElementById('id').value;

    const nome = document.getElementById('nome').value;

    const local_encontrado = document.getElementById('local_encontrado').value;

    const data_encontrado = document.getElementById('data_encontrado').value;

    const status_objeto = document.getElementById('status_objeto').value;

    const descricao = document.getElementById('descricao').value;

    const dataToSend = {
        nome,
        local_encontrado,
        data_encontrado,
        status_objeto,
        descricao
    };

    if (id === '') {

        await fetch(`${server}/achados/cadastrar`, {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(dataToSend)
        });

    } 
    
    else {

        await fetch(`${server}/achados/status/${id}`, {

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


const tablePendentes =
    document.getElementById('table-pendentes');

async function fetchPendentes() {

    const response = await fetch(
        `${server}/achados/pendentes`
    );

    const pendentes = await response.json();

    tablePendentes.innerHTML = '';

    pendentes.forEach((e) => {

        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${e.id}</td>
            <td>${e.nome}</td>
            <td>
                ${new Date(
                    e.data_encontrado
                ).toLocaleDateString('pt-BR')}
            </td>
        `;

        tablePendentes.appendChild(tr);
    });
}

addEventListener('load', () => {

    fetchData();

    fetchPendentes();
});