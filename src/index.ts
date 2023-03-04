


const numbers = [1,2,3,4,5,6];

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numbers.reduce(totalReducer, 5);
console.log('total arr', total)