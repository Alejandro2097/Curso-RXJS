import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";

const numeros$ = of(1,'1',1,1,1,'1',2,2,2,3,4,4,4);

numeros$.pipe(
    distinct()
)
.subscribe(console.log)

interface Personaje {
    nombre: string;

}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willi'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Megaman'
    },
]

from(personajes).pipe(
    distinct( p => p.nombre)
).subscribe(console.log);