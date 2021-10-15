// Este es el punto de entrada de tu aplicacion

import { myFunction } from './index.js';
<<<<<<< HEAD
import { login } from './lib/view/templateLogin.js';
// import { registration } from './lib/view/templateRegistration.js';
=======
// import { login } from './lib/view/templateLogin.js';
import { registration } from './lib/view/templateRegistration.js';
>>>>>>> ab6ec8c0f35197957d6dd5afb94c0c1dddaac213
import { changeRouter } from './lib/router.js';

document.getElementById('root').innerHTML = registration();
const init = () => {
  document.getElementById('root').appendChild(login());
  // changeRouter(window.location.hash);
  window.addEventListener('hashchange', () => {
    myFunction();
    changeRouter(window.location.hash);
  });
};

window.addEventListener('load', init);
