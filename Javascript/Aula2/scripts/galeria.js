let text = document.getElementById('descricao').value;
let img = document.getElementById('link').value;
let lista = document.getElementById('lista');

let div = document.createElement('div');
let button = document.createElement('button');
let span = document.createElement('span');
let image = document.createElement('img');

function adicionar() {

    let text = document.getElementById('descricao').value;
    let img = document.getElementById('link').value;
    let lista = document.getElementById('lista');

    let div = document.createElement('div');
    let button = document.createElement('button');
    let span = document.createElement('span');
    let image = document.createElement('img');

    image.src = img;
    span.textContent = text;
    button.textContent = "Remover";

    div.appendChild(image);
    div.appendChild(span);
    div.appendChild(button);

    lista.appendChild(div);

    button.classList.add('delete-btn');

    button.addEventListener('click', () => {
        button.parentElement.remove();
    })
}