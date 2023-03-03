import { range, tap } from 'rxjs';

const numeros$ = range(1,5);

numeros$.pipe(
    tap( x => console.log('antes', x))
).subscribe( val => console.log('subs', val));