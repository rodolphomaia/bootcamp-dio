class ContaUniversitaria extends ContaBancaria {
    constructor (agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(value){
        if(value > this.saldo){
            return "Operação inválida, saldo insuficiente!";
        }
        if(value > 500){
            return "Valor solicitado acima do limite para este tipo de conta!";
        }
        this.saldo -= value
        return `Saldo restante: R$ ${this.saldo}`
    }
}