class ContaCorrente extends ContaBancaria {
    constructor (agencia, numero, cartaoCredito) {
        super(agencia, numero)
        this.tipo = 'cartaoCredito'
        this.cartaoCredito = cartaoCredito
    }

    getCartaoCredito(){
        if(this.cartaoCredito == false){
            return `Esta conta NÃO POSSUI cartão de crédito!`;
        } else {
            return `Esta conta POSSUI cartão de crédito!`;
        }
    }

    setCartaoCredito(valor){
        this.cartaoCredito = valor
        if(this.cartaoCredito == false){
            return `Esta conta NÃO POSSUI mais cartão de crédito!`;
        } else {
            return `Esta conta agora POSSUI cartão de crédito!`;
        }
    }
}