import { from, fromEvent, range } from 'rxjs';
import { filter } from 'rxjs/operators'

range(1,10).pipe(
    filter((val, i) => {
        console.log('index', i)
        return val % 2 === 1
    })).subscribe(console.log)

const personajes = [
    {
        tipo: 'Heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'Heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'Villano',
        nombre: 'Joker'
    },
]
from(personajes).pipe(
    filter(val =>{
       return val.tipo === 'Villano'
    })
).subscribe(console.log);

const keyUp$ = fromEvent(document, 'keyup');

