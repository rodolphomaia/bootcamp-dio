class ContaBancaria {
    constructor (agencia, numero, tipo) {
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this.saldo = 0
    }

    getSaldo() {
        return `Saldo: R$ ${this.saldo}`
    }

    setSaldo(value) {
        this.saldo = value
        `Novo saldo: R$ ${this.saldo}`
    }

    sacar(value) {
        if(value > this.saldo){
            return "Operação inválida, saldo insuficiente!";
        }
        this.saldo -= value;
        return `Saldo restante: R$ ${this.saldo}`
    }

    depositar(value) {
        this.saldo += value
        return `Novo saldo: R$ ${this.saldo}`
    }
}