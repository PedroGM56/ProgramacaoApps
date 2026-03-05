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

filtroAtivo = users.filter((u) => u.active == true)
    // console.log(filtroAtivo)

filtroInativo = users.filter((u) => u.active == false)
    // console.log(filtroInativo)

filtroDev = users.filter((u) => u.role == 'dev')
    // console.log(filtroDev)

filtroDesign = users.filter((u) => u.role == 'designer')
    // console.log(filtroDesign)

filtroManager = users.filter((u) => u.role == 'manager')
    // console.log(filtroManager)

filtroAnalyst = users.filter((u) => u.role == 'data_analyst')
    // console.log(filtroAnalyst)

filtroMaior = users.filter((u) => u.salary > 5000)
    // console.log(filtroMaior)

filtroMenor = users.filter((u) => u.salary < 4000)
    // console.log(filtroMenor)

filtro30 = users.filter((u) => u.age > 30)
    // console.log(filtro30)

filtro25 = users.filter((u) => u.age < 25)
    // console.log(filtro25)

filtroAnaAtivo = users.filter((u) => u.role == 'data_analyst' && u.active == true)
    // console.log(filtroAnaAtivo)

filtroDevMaior = users.filter((u) => u.role == 'dev' && u.salary > 4000)
    // console.log(filtroDevMaior)

filtroMan30 = users.filter((u) => u.role == 'manager' && u.age > 30)
    // console.log(filtroMan30)

let container = document.getElementById('container')

function createCard(users) {
    let div = document.createElement('div')
    let span = document.createElement('span')
    span.innerHTML = `${users.name} ${users.age}`
    div.appendChild(span)

    return div
}

const filtros = {
    Ativos: filtroAtivo,
    Inativos: filtroInativo,
    Devs: filtroDev,
    Designers: filtroDesign,
    Managers: filtroManager,
    Analysts: filtroAnalyst,
    SalarioMaior5000: filtroMaior,
    SalarioMenor4000: filtroMenor,
    IdadeMaior30: filtro30,
    IdadeMenor25: filtro25,
    AnalystAtivo: filtroAnaAtivo,
    DevSalarioMaior4000: filtroDevMaior,
    ManagerMaior30: filtroMan30
}

function todos() {

    container.innerHTML = ''

    Object.entries(filtros).forEach(([titulo, lista]) => {

        const section = document.createElement('div')
        section.classList.add('section')

        const h2 = document.createElement('h2')
        h2.innerText = titulo
        section.appendChild(h2)

        const cards = document.createElement('div')
        cards.classList.add('cards')

        lista.forEach(user => {
            const card = createCard(user)
            cards.appendChild(card)
        })

        section.appendChild(cards)
        container.appendChild(section)

    })
}

todos()