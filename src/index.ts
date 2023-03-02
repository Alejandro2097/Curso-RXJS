import { fromEvent, range } from 'rxjs';
import { map } from 'rxjs';

// range(1,5).pipe(
//     map<number,number>(val => val * 10)
// )
// .subscribe(console.log);


const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyUp$.subscribe(val => console.log('map', val));