const formatt = document.getElementById('formatt')
const form = document.getElementById('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome_produto = document.getElementById('nome_produto').value;
    const categoria_produto = document.getElementById('categoria_produto').value;
    const quantidade = document.getElementById('quantidade').value;
    const preco_unitario = document.getElementById('preco_unitario').value;
    const data_venda = document.getElementById('data_venda').value;
    const forma_pagamento = document.getElementById('forma_pagamento').value;
    const nome_vendedor = document.getElementById('nome_vendedor').value;

    const response = await fetch('http://localhost:8080/registrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome_produto,
            categoria_produto,
            quantidade,
            preco_unitario,
            data_venda,
            forma_pagamento,
            nome_vendedor
        })
    });

        const data = await response.json();
        console.log(data);

    // 🔥 atualiza a tabela depois
    await carregarVendas();

});

    formatt.addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = document.getElementById('attid').value;
    const nome_produto = document.getElementById('attnome_produto').value;
    const categoria_produto = document.getElementById('attcategoria_produto').value;
    const quantidade = document.getElementById('attquantidade').value;
    const preco_unitario = document.getElementById('attpreco_unitario').value;
    const data_venda = document.getElementById('attdata_venda').value;
    const forma_pagamento = document.getElementById('attforma_pagamento').value;
    const nome_vendedor = document.getElementById('attnome_vendedor').value;

    const response = await fetch(`http://localhost:8080/atualizar/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome_produto,
            categoria_produto,
            quantidade,
            preco_unitario,
            data_venda,
            forma_pagamento,
            nome_vendedor
        })
    });

    const data = await response.json();
    console.log(data);

    await carregarVendas();
});

async function carregarVendas() {
    const response = await fetch('http://localhost:8080/dados_venda');
    const vendas = await response.json();

    const tbody = document.getElementById('listaVendas');
    tbody.innerHTML = "";

    vendas.forEach(venda => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${venda.nome_produto}</td>
            <td>${venda.categoria_produto}</td>
            <td>${venda.quantidade}</td>
            <td>R$ ${venda.preco_unitario}</td>
            <td>R$ ${venda.valor_total}</td>
            <td>${venda.data_venda}</td>
            <td>${venda.forma_pagamento}</td>
            <td>${venda.nome_vendedor}</td>
            <td>
                <button onclick="deletarVenda(${venda.id_venda})">Deletar</button>
                <button onclick='atualizarVenda(${JSON.stringify(venda)})'>
                    Atualizar
                </button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}


function atualizarVenda(venda){
    document.getElementById('attid').value = venda.id_venda;
    document.getElementById('attnome_produto').value = venda.nome_produto;
    document.getElementById('attcategoria_produto').value = venda.categoria_produto;
    document.getElementById('attquantidade').value = venda.quantidade;
    document.getElementById('attpreco_unitario').value = venda.preco_unitario;

    const dataFormatada = venda.data_venda.split('T')[0];
    document.getElementById('attdata_venda').value = dataFormatada;

    document.getElementById('attforma_pagamento').value = venda.forma_pagamento;
    document.getElementById('attnome_vendedor').value = venda.nome_vendedor;
}

async function deletarVenda(id_venda) {
    try {
        const response = await fetch(`http://localhost:8080/deletar/${id_venda}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Erro ao deletar venda');
        }

        carregarVendas();

    } catch (error) {
        console.error(error);
    }
}

window.onload = () => {
    carregarVendas();
};

