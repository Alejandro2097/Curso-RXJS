import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/1';
// const url = 'https://api.github.com/users?per_page=5';

const manejaError = (resp: AjaxError) => {
    console.warn('error', resp.message);
    return of({
        ok: false,
        usuarios: []
    })
}

// const obs$ = ajax.getJSON( url).pipe(
//     catchError(manejaError)
// );
// const obs2$ = ajax( url).pipe(
//     catchError(manejaError)
// );

const obs$ = ajax.getJSON( url);
const obs2$ = ajax( url);

// obs$.subscribe(data => console.log('data: ', data));
obs2$.subscribe();

