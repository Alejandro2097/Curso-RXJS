import { Observable } from 'rxjs';
import { Observer } from 'rxjs/internal/types';

const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]:', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completado [obs]')
}
// const obs$ = Observable.create();

const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('mundo');

    subs.next('Hola');
    subs.next('mundo');

    // Forzar un error 
    const a = undefined;
    a.nombre = 'Fernando';

    subs.complete();
});

obs$.subscribe(observer);

// obs$.subscribe(
//     valor => console.log('next', valor),
//     error => console.warn('error', error),
//     () => console.info('Completado')
// );