function addTask() {
    let lista = document.querySelector('#task').value;

    let task = document.createElement('li');
    let texto = document.createElement('span');
    let check = document.createElement('input');

    check.type = 'checkbox';
    texto.textContent = lista;

    task.appendChild(check);
    task.appendChild(texto);

    document.querySelector('#lista').appendChild(task);
    document.querySelector('#task').value = '';
}


function remove() {
    let checks = document.querySelectorAll('#lista input:checked');

    checks.forEach(check => {
        check.closest('li').remove();
    });
}


document.querySelector('#addTask').addEventListener('click', addTask);
document.querySelector('#removeTask').addEventListener('click', remove);