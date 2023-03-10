import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (response: Response ) => {
    if(!response.ok ) {
        throw new Error( response.statusText );
    }
    return response;
}

const fetchPromesa = fetch(url);

// fetchPromesa
//     .then(resp => resp.json())
//     .then(data => console.log('data: ', data))
//     .catch(err => console.warn('error en usuarios ', err))
    
// fetchPromesa
//     .then(manejaErrores)
//     .then(resp => resp.json())
//     .then(data => console.log('data: ', data))
//     .catch(err => console.warn('error en usuarios ', err))


ajax(url).pipe(
    map(resp => resp.response)
)
.subscribe(console.log)