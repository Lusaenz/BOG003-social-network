import { loginGoogle, loginUser } from '../firebase.js';
// **********CONTENEDOR HTML DEL FORMULARIO DE INICIO DE SESION**********
export const login = () => {
  const loginEmail = `
  <div class="logo">
    <img src="img/FILMPRO.png" alt="logo" width="350">
  </div>
  <section id="login-first-page" class="register-second-page">
    <div class="formulary-name" id="formulary-email-login">
      <div class="formulary-name-input">
        <input type="text" class="formulary-input" name="email" id="email" placeholder="correo electronico">
        <i class="formulary-validation fas fa-skull-crossbones"></i>
      </div>
      <p class="formulary-fault">El correo electronico debe ser gmail.</p>
    </div>
    <div class="formulary-name" id="formulary-password-login">
      <div class="formulary-name-input">
        <input type="password" class="formulary-input" name="password" id="password" placeholder="Contraseña" maxlength="16">
        <i class="formulary-validation fas fa-skull-crossbones"></i>
      </div>
      <p class="formulary-fault">La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula
      NO puede tener otros símbolos.</p>
    </div>
    <div class="formulary-msj" id="formulary-msj-login">
      <p><b>Error:</b>Por completar el formulario.</p>
    </div>
    <div class="error"></div>
    <div class=" formulary-name btn-register">
      <button type="submit" id="btn-login" class="btn-validation">Iniciar Sesion</button>
    </div>
    <a class="btn-register-here" href="#/Registrate-aqui">Registrate aqui</a>
  
    <div id="loginGoogle" class="btnRegister-google">
      <button><i class="fab fa-google"></i> Iniciar sesion con google</button>
    </div>
  
  </section>`;

  // **********CREACION DE UN DIV PARA EL LLAMADO DEL DOM***********
  const containerLogin = document.createElement('div');
  containerLogin.innerHTML = loginEmail;
  const btnGoogle = containerLogin.querySelector('#loginGoogle');
  btnGoogle.addEventListener('click', () => {
    loginGoogle();
  });
  const btnLogin = containerLogin.querySelector('#btn-login');
  btnLogin.addEventListener('click', () => {
    const emailLogin = document.querySelector('#email').value;
    const passwordLogin = document.querySelector('#password').value;
    loginUser(emailLogin, passwordLogin)
      .catch((error) => {
        const errorCode = error.code;
        const fauldLogin = document.querySelector('.error');
        switch (errorCode) {
          case 'auth/wrong-password':
            fauldLogin.innerHTML = 'Su contraseña es incorrecta';
            break;
          case 'auth/user-not-found':
            fauldLogin.innerHTML = 'Usuario no registrado, porfavor registrese';
            break;
          default:
            fauldLogin.innerHTML = 'Completa todos los campos porfavor';
            break;
        }
      });
  });
  return containerLogin;
};
