function filtraPares(arr){
    return arr.filter(item => item % 2 == 0);
}
function filtraImpares(arr){
    return arr.filter(item => item % 2 != 0);
}
const arr = [1, 3, 4, 6, 7, 8, 10, 12, 13, 16, 29];

console.log('Filtra pares: ', filtraPares(arr));
console.log('Filtra ímpares: ', filtraImpares(arr));