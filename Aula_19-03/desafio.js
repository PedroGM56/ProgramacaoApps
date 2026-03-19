const items = []

class Item {
    #id; #title; #available

    constructor(id, title){
        if (new.target == Item){
            throw new Error('A classe Item não pode ser instanciada diretamente')
        }

        if (!id){
            throw new Error('ID obrigatório')
        }

        if (!title){
            throw new Error('Título obrigatório')
        }

        this.#id = id
        this.#title = title
        this.#available = true

        items.push(this)
    }

    getId(){
        return this.#id
    }

    getTitle(){
        return this.#title
    }
    
    setTitle(title){
        if (!title){
            throw new Error('Título não pode ser vazio')
        }
        this.#title = title
    }

    verifyAvailability(){
        return this.#available
    }

    emprestar(){
        if (this.#available){
            this.#available = false
            return 'Item emprestado'
        }
        return 'Item já emprestado'
    }

    devolver(){
        if (!this.#available){
            this.#available = true
            return 'Item devolvido'
        }
        return 'Item já disponível'
    }

    showData(){
        return {
            id: this.#id,
            title: this.#title,
            available: this.#available
        }
    }
}

class Book extends Item {
    constructor(id, title, author){
        if (!author){
            throw new Error('Autor obrigatório')
        }

        super(id, title)
        this.author = author
    }
}

class Movie extends Item {
    constructor(id, title, duration){
        if (!duration || duration <= 0){
            throw new Error('Duração inválida')
        }

        super(id, title)
        this.duration = duration
    }
}

function listarItems(){
    return items.map(item => item.showData())
}

const b1 = new Book(1, 'O Príncipe', 'Maquiavel')

console.log(b1.showData())
console.log(b1.emprestar())
console.log(b1.devolver())

const m1 = new Movie(1, 'Homem-aranha', 145)

console.log(m1.showData())
console.log(m1.emprestar())
console.log(m1.devolver())

console.log(listarItems())