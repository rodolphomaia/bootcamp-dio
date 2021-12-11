class ContaPoupanca extends ContaBancaria {
    constructor (agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}