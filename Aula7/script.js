const pessoas = [];

const pessoa1 = {
    name: 'Erich',
    lastName: 'Natal',
    age: 22
};

const pessoa2 = {
    name: 'Igor',
    lastName: 'Machado',
    age: 20
};

const pessoa3 = {
    name: 'Pedro',
    lastName: 'Marinho',
    age: 20
};

const pessoa4 = {
    name: 'Thiago',
    lastName: 'Vilhena',
    age: 22
};

const pessoa5 = {
    name: 'Phillipe',
    lastName: 'Littig',
    age: 19
};


pessoas.push(pessoa1);
pessoas.push(pessoa2);
pessoas.push(pessoa3);
pessoas.push(pessoa4);
pessoas.push(pessoa5);

// const filteredPeople = pessoas.filter((p) => p.age > 20)
// const findIgor = pessoas.find((p) => p.name == 'Igor')

// // console.log(filteredPeople);
// // console.log(findIgor);
// // console.log(pessoas.indexOf(findIgor))

// let container = document.getElementById('container')

// function createCard(pessoa) {
//     let div = document.createElement('div')
//     let span = document.createElement('span')
//     span.innerHTML = `${pessoa.name} ${pessoa.age}`
//     div.appendChild(span)

//     return div
// }

// filteredPeople.forEach(pessoa => {
//     const card = createCard(pessoa)
//     container.appendChild(card)
// })

// método filter -> filtrar um vetor com base em uma condição
// método find -> encontrar um valor com base em uma condição
// método reduce -> reduz o vetor para um único valor 

const arr = [1, 2, 3, 4, 5]

const somaArr = arr.reduce((acc, value) => {
    return acc + value
}, 0)

console.log(somaArr)

const ageAvg = pessoas.reduce((acc, pessoa) => {
    return acc + pessoa.age / pessoas.length
}, 0)

console.log(ageAvg.toFixed(0))

// map transforma um vetor de acordo com uma condição

const arr2 = [1, 2, 3, 4, 5]

const mappedArr = arr2.map((arr) => {
    return arr * 2
})

console.log(mappedArr)

console.log(pessoas)

const mappedPeople = pessoas.map((pessoa) => {
    return { name: pessoa.name, lastName: pessoa.lastName }
})

console.log(mappedPeople)