import { from, reduce, scan } from "rxjs";


const numeros = [1,2,3,4,5];

// const totalAcumulado = (acc, cur) => {
//     return acc + cur;
// }
const totalAcumulado = (acc, cur) =>  acc + cur;

// Reduce

from(numeros).pipe(
    reduce(totalAcumulado, 0)
)
.subscribe(console.log);

// Scan
from(numeros).pipe(
    scan(totalAcumulado, 0)
)
.subscribe(console.log);