import { fromEvent } from 'rxjs'

// Eventos del DOM

const src1$ = fromEvent(document, 'click');
const src2$ = fromEvent(document, 'keyup');

const observer = {
    next: val => console.log('next', val)
}