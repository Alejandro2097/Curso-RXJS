import { fromEvent, take } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click');


click$.pipe(
    take(1)
)
.subscribe({
    next: val => console.log('next: ', val ),
    complete: () => console.log('complete ')
})