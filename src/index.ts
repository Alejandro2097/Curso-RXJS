import { interval } from 'rxjs';

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete:')
}

const interval$ = interval(1000);

console.log('Inicio');
// interval$.subscribe(observer);
console.log('Fin');