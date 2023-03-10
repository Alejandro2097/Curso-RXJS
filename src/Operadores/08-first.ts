import { fromEvent } from 'rxjs';
import { first, map, take, tap } from 'rxjs/operators'

const click$ = fromEvent<MouseEvent>(document, 'click');


click$.pipe(
    tap(console.log),
    // map(event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // }))
    map(({ clientY, clientX }) => ({ clientY, clientX })),
    first(event => event.clientY >= 150)
) 
.subscribe({
    next: val => console.log('next: ', val ),
    complete: () => console.log('complete ')
})