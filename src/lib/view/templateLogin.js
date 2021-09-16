import { loginGoogle } from '../firebase.js';

export const login = () => {
  const loginEmail = `
    <section id="login-first-page" class="login-first-page">
      <input type="email" placeholder="Correo electronico">
      <input type="password" placeholder="Contraseña">
      <button>Iniciar Sesion</button>
      <a href="#/Registrate-aqui">Registrate aqui</a> 
      <button id="loginGoogle">Iniciar sesion con google</button>
    </section>`;

  const containerLogin = document.createElement('div');
  containerLogin.innerHTML = loginEmail;
  const btnGoogle = containerLogin.querySelector('#loginGoogle');
  btnGoogle.addEventListener('click', () => {
    loginGoogle();
  });

  return containerLogin;
};
