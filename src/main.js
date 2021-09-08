// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { login } from './lib/view/templateLogin.js';
import { registration } from './lib/view/templateRegistration.js';
import { changeRouter } from './lib/router.js';

document.getElementById('root').innerHTML = registration();
const init = () => {
  document.getElementById('root').innerHTML = login();
  window.addEventListener('hashchange', () => {
    myFunction();
    console.log(window.location.hash);
    changeRouter(window.location.hash);
  });
};

window.addEventListener('load', init);
