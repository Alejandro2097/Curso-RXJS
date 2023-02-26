import { Observable } from 'rxjs';
import { Observer } from 'rxjs/internal/types';

const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]:', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completado [obs]')
}
// const obs$ = Observable.create();


const intervalos$ = new Observable<number>(subscriber => {
    // Crear un contador, 1,2,3,4,5
    let count = 0
    const interval = setInterval(() =>{
        // cada segundo
        count ++;
        subscriber.next(count);
        console.log(count);
    }, 1000);
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
})
const subs1 = intervalos$.subscribe();
const subs2 = intervalos$.subscribe();
const subs3 = intervalos$.subscribe();

setTimeout(() => {
    subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe();
    console.log('Completado el timeout');
}, 3000);