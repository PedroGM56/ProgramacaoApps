const users = [
    { id: 1, name: 'Ana', age: 22, salary: 3500, active: true, role: 'dev' },
    { id: 2, name: 'Carlos', age: 29, salary: 7200, active: false, role: 'manager' },
    { id: 3, name: 'Marina', age: 31, salary: 6800, active: true, role: 'designer' },
    { id: 4, name: 'João', age: 19, salary: 2500, active: true, role: 'dev' },
    { id: 5, name: 'Fernanda', age: 27, salary: 4100, active: false, role: 'designer' },
    { id: 6, name: 'Lucas', age: 35, salary: 9500, active: true, role: 'manager' },
    { id: 7, name: 'Beatriz', age: 24, salary: 3900, active: true, role: 'dev' },
    { id: 8, name: 'Rafael', age: 33, salary: 7800, active: true, role: 'data_analyst' },
    { id: 9, name: 'Juliana', age: 26, salary: 5200, active: true, role: 'data_analyst' },
    { id: 10, name: 'Bruno', age: 41, salary: 11000, active: false, role: 'manager' },
    { id: 11, name: 'Camila', age: 30, salary: 6300, active: true, role: 'designer' },
    { id: 12, name: 'Thiago', age: 28, salary: 4700, active: true, role: 'dev' },
    { id: 13, name: 'Patricia', age: 37, salary: 8800, active: true, role: 'data_analyst' },
    { id: 14, name: 'Gustavo', age: 23, salary: 3100, active: false, role: 'dev' },
    { id: 15, name: 'Larissa', age: 34, salary: 7600, active: true, role: 'manager' }
]

//Exercicios Map

const ex1 = users.map((user) => {
    return { name: user.name, role: user.role }
})

// console.log(ex1)

const ex2 = users.map((user) => {
    return { name: user.name }
})

// console.log(ex2)

const ex3 = users.map((user) => {
    return { name: user.name.toUpperCase() }
})

// console.log(ex3)

const ex4 = users.map((user) => {
    return {...user, salaryAnnual: user.salary * 12 }
})

// console.log(ex4)

const ex5 = users.map((user) => {
    return { name: user.name, age: user.age }
})

// console.log(ex5)

const ex6 = users.map((user) => {
    return { name: user.name, salary: 'R$' + user.salary }
})

// console.log(ex6)

const ex7 = users.map((user) => {
    if (user.age >= 18 && user.age < 60) {
        return {...user, group: 'Pleno' }
    } else if (user.age < 18) {
        return {...user, group: 'Júnior' }
    } else {
        return {...user, group: 'Sênior' }
    }

})

// console.log(ex7)

const ex8 = users.map((user) => {
    if (user.salary < 5000 && user.salary < 7000) {
        return {...user, class: 'Baixo' }
    } else if (user.salary < 8000) {
        return {...user, class: 'Médio' }
    } else {
        return {...user, class: 'Alto' }
    }
})

// console.log(ex8)

const ex9 = users.map((user) => {
    return { id: user.id, name: user.name, active: user.active }
})

// console.log(ex9)

//Exercicios Reduce

const ex11 = users.reduce((acc, user) => {
    return acc + user.salary
}, 0)

// console.log('R$ ', ex11.toFixed(2))

const ex12 = users.reduce((acc, user) => {
    return acc + user.salary
}, 0) / users.length

// console.log('R$ ', ex12.toFixed(2))

const ex13 = users.reduce((acc, user) => {
    return acc + user.age
}, 0) / users.length

// console.log(ex13.toFixed(0))

const ex14 = users.reduce((acc, user) => {
    if (user.active == true) {
        acc += 1
    }
    return acc
}, 0)

// console.log(ex14)

const ex15 = users.reduce((acc, user) => {
    if (user.active == false) {
        acc += 1
    }
    return acc
}, 0)

// console.log(ex15)

maior = 0
const ex16 = users.reduce((user) => {
    if (user.salary > maior) {
        maior = user.salary
    }
    return maior
})

// console.log(ex16)

menor = 100000000
const ex17 = users.reduce((user) => {
    if (user.salary < menor) {
        menor = user.salary
    }
    return menor
})

// console.log(ex17)

const ex18 = users.reduce((acc, user) => {
    if (user.active == true) {
        acc += user.salary
    }
    return acc
}, 0)

console.log(ex18)

//Desafio

ativos = users.filter((user) => user.active == true)
const mediaS = ativos.reduce((acc, user) => {
    return acc + user.salary
}, 0) / ativos.length
console.log('R$', mediaS.toFixed(2))



let container = document.getElementById('container')

function render(titulo, valor) {
    let div = document.createElement("div")
    div.innerHTML = `<h3>${titulo}</h3><p>${JSON.stringify(valor)}</p>`
    container.appendChild(div)
}

render('Média ativos: ', 'R$' + mediaS.toFixed(2))
render('Total folha: ', 'R$' + ex11.toFixed(2))

const usuariosCargo = users.reduce((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1
    return acc
}, {})
render('Usuários por cargo', usuariosCargo)

const maisQ5 = users.filter((u) => u.salary > 5000).map((user) => {
    return { name: user.name, role: user.role }
})
render('Mais que 5000', maisQ5)


const manAtivos = users.filter((u) => u.active == true).reduce((acc, u) => {
    return acc + u.age
}, 0) / users.length
render('Managers ativos Média: ', manAtivos.toFixed(0))

const maiorSalario = users.reduce((acc, u) => {
    acc[u.role] = (acc[u.role] || 0) + u.salary
    return acc
}, {})
const cargoSoma = Object.keys(maiorSalario).reduce((a, b) =>
    maiorSalario[a] > maiorSalario[b] ? a : b
)
render('Maior Salário: ', cargoSoma)

const nome = ativos.reduce((a, b) => {
    return (a.salary > b.salary) ? a : b
})
render('Nome maior salario ativo: ', nome.name)