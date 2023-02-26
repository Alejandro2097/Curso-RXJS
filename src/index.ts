import { Observable } from 'rxjs';
import { Observer } from 'rxjs/internal/types';

const observer:Observer<any> ={
 
    next:value => console.log('[next]:',value),
    error: error => console.warn('error', error),
    complete: () => console.info('completado')
};
 
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
const subs1 = intervalos$.subscribe(observer);
const subs2 = intervalos$.subscribe(observer);
const subs3 = intervalos$.subscribe(observer);


subs1.add();
subs2.add();
subs3.add(); 
 
 
setTimeout(() => {
    
    subs1.unsubscribe();
   /* subs2.unsubscribe();
    subs3.unsubscribe();*/
    console.log('Completado Timeot');
}, 6000);