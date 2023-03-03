import { fromEvent } from 'rxjs';
const texto = document.createElement('div');

texto.innerHTML = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus metus vel fermentum hendrerit. Sed augue ante, efficitur fringilla tristique et, tempor sit amet mauris. Duis id justo id est auctor pulvinar. Suspendisse risus lorem, viverra et scelerisque in, feugiat id nulla. Morbi vestibulum quam eget maximus tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis venenatis magna vel iaculis blandit. Nam vehicula pulvinar sodales. Nullam imperdiet arcu purus, sit amet viverra dui fermentum et. Nulla vitae lorem suscipit, molestie sapien in, dignissim justo. Pellentesque tristique hendrerit odio, et accumsan ex placerat rutrum. Vestibulum augue risus, vehicula vitae purus non, viverra convallis odio.
        <br/><br/>
        Phasellus pulvinar rhoncus lobortis. Pellentesque lobortis sollicitudin ipsum, nec ullamcorper dui maximus nec. Pellentesque vestibulum, erat vel eleifend condimentum, ligula ligula tincidunt nulla, vitae tempus diam justo eu nulla. Nulla et enim et ligula luctus luctus sed suscipit magna. Nam sit amet tortor ipsum. Vestibulum porttitor semper elementum. Mauris eu dolor at velit convallis suscipit. Fusce ac sem porta mauris aliquam feugiat non sed libero. Sed rhoncus lectus sed nulla ultrices, at posuere orci ultrices. Cras convallis ex in est tristique, elementum ornare nibh cursus. Donec ex eros, eleifend in lorem id, fringilla egestas dui. Phasellus semper felis in lacus venenatis venenatis. Mauris consectetur massa ante, a iaculis elit cursus in. Sed tincidunt bibendum dolor, et pellentesque purus semper in.
        <br/><br/>
        Vivamus dictum nisi nec ornare pulvinar. Etiam ullamcorper ante vitae nunc gravida, a congue arcu auctor. Cras in aliquam sapien. Mauris sed felis ac mauris ultricies ullamcorper non at dui. Duis ullamcorper mi dictum, posuere sem eget, placerat nisi. Vivamus eget rhoncus quam. Aenean elit urna, aliquam vel tincidunt at, pellentesque eget mauris. Vestibulum quis purus eu nunc euismod laoreet. Sed rutrum non neque nec suscipit. Vivamus mauris risus, ultricies id nisl non, interdum convallis turpis.
        <br/><br/>
        Sed rutrum ante eu mauris vestibulum aliquam. Aliquam erat volutpat. Duis volutpat diam nec felis viverra, ut fringilla sapien pretium. Donec ac leo ut tellus rhoncus semper non nec purus. Morbi consectetur urna et quam vulputate porta. Donec ex nunc, molestie eget rhoncus vitae, sodales at diam. Sed at lacus imperdiet, eleifend nunc sed, posuere eros. Praesent laoreet, enim eget condimentum consequat, nisi nisl blandit felis, nec iaculis purus lectus vitae nunc. Vivamus at consectetur arcu. Proin et scelerisque mauris. Donec vestibulum ullamcorper accumsan. Quisque vel fringilla leo. Curabitur facilisis ipsum ac blandit molestie.
        <br/><br/>
        Ut vitae risus a sem aliquam interdum ac ac purus. Duis dapibus pharetra ex, sed bibendum urna suscipit non. Nunc sit amet fermentum leo. Integer sollicitudin pretium enim et elementum. Sed at magna justo. Integer laoreet volutpat interdum. Suspendisse potenti. Curabitur laoreet vel quam in auctor. Sed mollis vitae arcu in bibendum. Quisque dignissim, tortor sit amet semper pulvinar, neque ante pretium lacus, tempor pretium ligula nisl ac augue. Vestibulum accumsan semper vestibulum.
        ` ;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);


// funcion que haga el calculo

// Streams
const scroll$ = fromEvent(document, 'scroll');

// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe();

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
})