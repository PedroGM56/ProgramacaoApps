class Conta {
    #senha; #n_conta; #saldo; #titular; #agencia
    
    constructor(senha, agencia, n_conta, titular, saldo){
        this.#senha = senha
        this.#agencia = agencia
        this.#n_conta = n_conta
        this.#titular = titular
        this.#saldo = saldo
    }

    get saldo(){
        return this.#saldo;
    }

    set saldo(value){
        this.#saldo+=value;
    }

    depositar(n_conta, agencia, valor){
        if(n_conta === this.#n_conta && agencia === this.#agencia){
            return valor>0 ? this.#saldo+=valor : console.error('Valor deve ser positivo')
        }
        else{
            return console.error('Os dados de agência ou conta não coincidem. Operação cancelada')
        }
    }

}

const c1 = new Conta('1234', '111', '40028922', 'Diego', 2000)

c1.depositar('40028922', '111', 500)
console.log(c1.saldo)