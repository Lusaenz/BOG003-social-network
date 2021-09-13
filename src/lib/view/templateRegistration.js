export const registration = () => {
  const countRegister = `
  <div class="logo">
    <img src="img/FILMPRO.png" alt="logo" width="350">
  </div>
  <section id="register-second-page" class="register-second-page">

    <div class="formulary-name" id="formulary-name">
      <label for="usuario" class="formulary-label"></label>
      <div class="formulary-input">
        <input type="text" class="formulary-input" name="user" id="usuario" placeholder="Nombre" maxlength="16">
        <i class="formulary-validation fas fa-skull-crossbones"></i>
      </div>
      <p class="formulary-fault">El nombre tiene que ser de 3 a 16 digitos,solo se debe contener letras.</p>
    </div>

    <div class="formulary-name" id="formulary-LastName">
      <label for="LastName" class="formulary-label"></label>
      <div class="formulary-name-input">
        <input type="text" class="formulary-input" name="LastName" id="LastName" placeholder="Apellido" maxlength="16">
        <i class="formulary-validation fas fa-skull-crossbones"></i>
      </div>
      <p class="formulary-fault">El Apellido tiene que ser de 3 a 16 digitos,solo se debe contener letras.</p>
    </div>

    <div class="formulary-name" id="formulary-email">
      <label for="email" class="formulary-label"></label>
      <div class="formulary-name-input">
        <input type="text" class="formulary-input" name="email" id="email" placeholder="correo electronico" maxlength="16">
        <i class="formulary-validation fas fa-skull-crossbones"></i>
      </div>
      <p class="formulary-fault">El correo electronico debe ser gmail.</p>
    </div>

    <div class="formulary-name" id="formulary-password">
      <label for="password" class="formulary-label"></label>
      <div class="formulary-name-input">
        <input type="password" class="formulary-input" name="password" id="password" placeholder="Contraseña" maxlength="16">
        <i class="formulary-validation fas fa-skull-crossbones"></i>
      </div>
      <p class="formulary-fault">la Contraseña debe tener maximo 16 digitos y debe de tener mayusculas y minusculas o alguno de los siguientes simbolos /_.@.</p>
    </div>

    <div class="formulary-name" id="formulary-passwordConfirmation">
      <label for="passwordConfirmation" class="formulary-label"></label>
      <div class="formulary-name-input">
        <input type="password" class="formulary-input" name="passwordConfirmation" id="passwordConfirmation" placeholder="Confirmar Contraseña" maxlength="16">
        <i class="formulary-validation fas fa-skull-crossbones"></i>
      </div>
      <p class="formulary-fault">Ambas contraseñas deben de ser iguales.</p>
    </div>

    <div class="formulary-msj" id="formulary-msj">
      <p><b>Error:</b>Por completar el formulario.</p>
    </div>

    <div class=" formulary-name btn-register">
      <button type="submit" class="btn-validation">Registrarte</button>
    </div>

    <div class="btn-google">
      <button><i class="fab fa-google"></i> Registrate con google</button>
    </div>

  </section>`;

  const div = document.createElement('div');
  div.innerHTML = countRegister;
  const formularyRegistration = div.querySelector('#register-second-page');
  console.log(formularyRegistration);
  const inputs = div.querySelectorAll('.formulary-name-input input');
  console.log(inputs);

  const expression = {
    // eslint-disable-next-line
    user: /^[a-zA-Z\_\-]{4,16}$/, // Letras guion y guion_bajo.
    // eslint-disable-next-line
    lasName: /^[a-zA-Z\_\-]{4,16}$/, // Letras guion y guion_bajo.
    email: /^[a-zA-Z0-9_.+-]+@[zA-Z0-9-.]+$/, // 7 a 14 numeros.
    password: /^,{4,12}$/, // 4 a 12 digitos.
    passwordConfirmation: /^,{4,12}$/, // 4 a 12 digitos.
  };
  const formularyValidator = (e) => {
    switch (e.target.name) {
      case 'user':
        if (expression.user.test(e.target.value)) {
          console.log(expression.user.test(e.target.value));
        } else {
        //   div.querySelector('#formulary-name').classList.add('formulary-name-input-incorrecto'); 
        }
        break;
      case 'lastName':

        break;
      case 'email':

        break;
      case 'password':

        break;
      case 'passwordConfirmation':

        break;
      default:
    }
  };
  inputs.forEach((input) => {
    input.addEventListener('keyup', formularyValidator);
    input.addEventListener('blur', formularyValidator);
  });

  formularyRegistration.addEventListener('submit', (e) => {
    e.preventDefault();
  });
  return div;
};
