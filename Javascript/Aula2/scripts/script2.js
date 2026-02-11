let square = document.querySelector('#q1');
let input = document.querySelector('#colorInput');

function alterarCor() {
    square.style.backgroundColor = document.querySelector('#colorInput').value;
}

input.addEventListener('input', alterarCor);
square.addEventListener('click', alterarCor);