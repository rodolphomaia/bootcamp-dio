const obj1 = {
    value: 4,
};

const obj2 = {
    value: 7,
};

function mapComThis(arr, obj) {
    return arr.map((item) => {
        return item * obj.value; 
    }, obj);
}

function mapSemThis(arr) {
    return arr.map((item) => {
        return item * 4;
    });
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('Map com this: ', mapComThis(arr, obj1));
console.log('Map com this: ', mapComThis(arr, obj2));
console.log('Map sem this: ', mapSemThis(arr));
