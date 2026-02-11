function addTask() {
    let lista = document.querySelector('#task').value;
    let task = document.createElement('li');
    let texto = document.createElement('h1');
    texto.textContent = lista;
    task.appendChild(texto);
    document.querySelector('#lista').appendChild(task);
}

function remove() {
    let lista = document.querySelector('#task').value;
    let tasks = document.querySelectorAll('#lista li');
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].textContent === lista) {
            tasks[i].remove();
        }
    }
}

document.querySelector('#addTask').addEventListener('click', addTask);
document.querySelector('#removeTask').addEventListener('click', remove);