function somaNumerosArray(arr){
    return arr.reduce((prev, curr) => {
        return prev + curr
    })
}

const numeros = [1, 3, 4, 6, 7, 8, 10, 12, 13, 16, 29];

console.log('Soma dos números do array: ', somaNumerosArray(numeros));

function listaDePrecos(listaPrecos, saldo){
    const saldoFinal = listaPrecos.reduce((prev, curr) => {
        return prev - curr.preco
    }, saldo)
    return `Seu saldo disponível após a compra: R$ ${saldoFinal}`;
}

const listaPrecosAbusivosApple = [
    {
        nome: 'MacBook Pro',
        preco: 15000
    },
    {
        nome: 'iPhone SE',
        preco: 2600
    },
    {
        nome: 'Apple Watch',
        preco: 1400
    },
    {
        nome: 'Apple Magic Mouse',
        preco: 600
    },
    {
        nome: 'Apple Magic Keyboard',
        preco: 1500
    }
];
const saldo = 25000;

console.log(listaDePrecos(listaPrecosAbusivosApple, saldo));