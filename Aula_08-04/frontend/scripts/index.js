const form = document.getElementById('form');
const formatt = document.getElementById('formatt');

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const response = await fetch('http://localhost:8080/registro', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    });

    const data = await response.json();
    console.log(data);

    await carregarUsuarios();

});

formatt.addEventListener('submit', async (e) => {
    e.preventDefault()
    const id = document.getElementById('attid').value;
    const nome = document.getElementById('attnome').value;
    const email = document.getElementById('attemail').value;
    const senha = document.getElementById('attsenha').value;

    const response = await fetch(`http://localhost:8080/atualizar/${id}`, {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    });

    const data = await response.json();
    console.log(data);
    await carregarUsuarios();

});

async function atualizarUsuario(id, nome, email, senha){
    const attid = document.getElementById('attid');
    const attnome = document.getElementById('attnome');
    const attemail = document.getElementById('attemail');
    const attsenha = document.getElementById('attsenha');

    attid.value = id
    attnome.value = nome
    attemail.value = email
    attsenha.value = senha

}

async function carregarUsuarios(){
    const response = await fetch('http://localhost:8080/usuarios');
    const usuarios = await response.json();

    const tbody = document.getElementById('listaUsuarios');

    tbody.innerHTML = ""

    usuarios.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.nome}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="deletarUsuario(${user.id})">Deletar</button>
                <button onclick="atualizarUsuario('${user.id}', '${user.nome}', '${user.email}', '${user.senha}')">Atualizar</button>
            </td>
`
        tbody.appendChild(tr);

    });
};

async function deletarUsuario(id){
    try {
        const response = await fetch(`http://localhost:8080/deletar/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Erro ao deletar');
        }

        carregarUsuarios();

    } catch (error) {
        console.error(error);
    }
}



window.onload = () => {
    carregarUsuarios();
};
