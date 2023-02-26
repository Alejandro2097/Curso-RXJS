import { Observable } from 'rxjs';
import { Observer } from 'rxjs/internal/types';

const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]:', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completado [obs]')
}
