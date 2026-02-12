let input = document.getElementById('input').value;
let lista = document.getElementById('lista');

let div = document.createElement('div');
let button = document.createElement('button');
let span = document.createElement('span');

function cadastrar() {

    let input = document.getElementById('input').value;
    let lista = document.getElementById('lista');

    let div = document.createElement('div');
    let button = document.createElement('button');
    let span = document.createElement('span');

    div.classList.add('item');
    lista.appendChild(div);

    span.innerHTML = input;
    button.textContent = "Deletar";

    div.appendChild(span);

    button.classList.add('delete-btn');

    div.appendChild(button);

    button.addEventListener('click', () => {
        button.parentElement.remove();
    })
}