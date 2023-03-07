import { fromEvent, interval } from 'rxjs';

const boton  = document.createElement('button');

boton.innerHTML = 'Detener timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);

const clickBtn$ = fromEvent(boton, 'click');

counter$
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
})