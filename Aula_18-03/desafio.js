class User {
    #id;#name;#email;#password;#active

    constructor(id,name,email,password,active=true){
        if (new.target==User){
            throw new Error('A classe user não pode ser instanciada diretamente')
        }
        if(!id){
            throw new Error('O id é obrigatório')
        }
        this.#id=id;

        if (!name || name.trim()==""){
            throw new Error('O nome não pode ser vazio')
        }
        this.#name=name;

        if (!email || !email.includes('@')){
            throw new Error('O email deve conter um "@"')
        }
        this.#email=email;

        if (!password || password.length<6){
            throw new Error('A senha deve ter no mínimo 6 caracteres')
        }
        this.#password=password

        this.#active=active
    }

    get id(){
        return this.#id
    }

    get email(){
        return this.#email
    }

    alterarNome(novo, password){
        if (password == this.#password){
            return this.#name = novo
        }
        else{
            return console.error('Senha incorreta')
        }
    }

    alterarEmail(novo, password){
        if (password == this.#password){
            return this.#email = novo
        }
        else{
            return console.error('Senha incorreta')
        }
    }

    alterarSenha(nova, email, password){
        if (password == this.#password && email == this.#email){
            return this.#password = nova
        }
        else{
            return console.error('Email ou senha incorretos')
        }
    }

    verificarSenha(email, password){
        if (email == this.#email){
            if (password==this.#password){
                return 'A senha armazenada corresponde à digitada'
            }
            else{
                return 'A senha não corresponde ao email digitado'
            }
        
        }
        else{
            return 'Email incorreto'
        }
        }

    desativar(id, password){
        if (password==this.#password && id==this.#id){
            return this.#active=false
        }
        else{
            return 'ID ou senha incorretos'
        }
    }

    verificarAtivo(id){
        if (id==this.#id){
            if (this.#active==true){
                return 'O usuário está ativo'
            }
            else{
                return 'O usuário está inativo'
            }
        }
        else{
            return' Id incorreto'
        }
    }

    exibir(id){
        if (id==this.#id){
            return `
                ID: ${this.#id}
                Nome: ${this.#name}
                Email: ${this.#email}
                Ativo: ${this.#active}
                `
        }
        else{
            return 'Id incorreto'
        }
    }

    ativar(id, password){
        if (id == this.#id && password == this.#password){
            this.#active = true
            return 'Usuário ativado'
        }
        return 'ID ou senha incorretos'
    }

    }


class Admin extends User{
    constructor(id, name, email, password){
        super(id, name, email, password)
    }

    listarUsuarios(lista){
        return lista.map(user => user.exibir(user.id))
    }

    desativarUsuario(usuario, id, password){
        return usuario.desativar(id, password)
    }

    reativarUsuario(usuario, id, password){
        return usuario.ativar(id, password)
    }

}

class Client extends User {
    constructor(id, name, email, password){
        super(id, name, email, password)
    }

    verDados(id){
        return this.exibir(id)
    }

    alterarMeusDados(id, novosDados, password){
        if (id !== this.id){
            return 'Acesso negado'
        }

        let resultado = []

        if (novosDados.nome){
            resultado.push(this.alterarNome(novosDados.nome, password))
        }

        if (novosDados.email){
            resultado.push(this.alterarEmail(novosDados.email, password))
        }

        if (novosDados.senha){
            resultado.push(this.alterarSenha(novosDados.senha, this.email, password))
        }

        return resultado
    }
}

const c1 = new Client(1, 'Thiago', 'thiagov@gmail.com', 'thiago123')
console.log(c1.alterarMeusDados(1, {senha:'thiago12345'}, 'thiago123'))

