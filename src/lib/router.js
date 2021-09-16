/* eslint-disable no-else-return */
import { login } from './view/templateLogin.js';
import { registration } from './view/templateRegistration.js';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  switch (hash) {
    case '#/':
      containerRoot.appendChild(login());
      break;
    case '#/Registrate-aqui':
      containerRoot.appendChild(registration());
      break;
    default:
      containerRoot.innerText = 'Pagina no existente';
  }
};

export const changeRouter = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  } else if (hash === '#/Registrate-aqui') {
    return showTemplate(hash);
  } else {
    return showTemplate(hash);
  }
};
