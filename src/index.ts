import { Observable, Subject } from 'rxjs';
import { Observer } from 'rxjs/internal/types';

const observer:Observer<any> ={
 
    next:value => console.log('[next]:',value),
    error: error => console.warn('error', error),
    complete: () => console.info('completado')
};
 
// const obs$ = Observable.create();

const intervalo$ = new Observable<number>(subs => {
    const intervalID = setInterval(
        () =>  subs.next(Math.random()), 1000
    );
    return () => {
        clearInterval(intervalID);
        console.log('Intervalo destruido');
    }
});
//     SUBJECTS
//  1 - Casteo multiple
//  2 - Tambien es un observer
//  3- Tambien se puede manejar el next error y complete

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);
// const subs1 = intervalo$.subscribe(rnd => console.log('subs1', rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2', rnd));

const subs1 = subject$.subscribe( observer);
const subs2 = subject$.subscribe( observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);