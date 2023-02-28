import { asyncScheduler, observeOn, of, range } from 'rxjs';

// const src$ = of(1,2,3,4,5);
const src1$ = range(-5,10).pipe(observeOn(asyncScheduler))


console.log('inicio');
src1$.subscribe(console.log);
console.log('Fin');