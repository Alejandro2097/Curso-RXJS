import { from, of } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";

const numeros$ = of(1,'1',1,1,1,'1',2,2,2,3,4,4,4);

numeros$.pipe(
    distinctUntilChanged()
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
        nombre: 'Megaman'
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
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Megaman'
    },
]

from(personajes).pipe(
    distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
).subscribe(console.log);