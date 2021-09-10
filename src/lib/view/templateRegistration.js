export const registration = () => {
  const countRegister = `
    <div class="logo">
      <img src="img/FILMPRO.png" alt="logo" width="350">
    </div>
    <section id="register-second-page" class="register-second-page">
        <div class="formulary-name " id="formulary-name">
          <label for="name" class="formulary-label"></label>
        </div>

        <div class="formulary-name-input">
          <input type="text" class="formulary-input " name="user" id ="user" placeholder="Nombre" maxlength="16">
          <i class="formulary-validation fas fa-skull-crossbones"></i>
          <p class="formulary-fault">El nombre tiene que ser de 3 a 16 digitos, solo debe conterner letras.</p>
        </div>

        <div class="formulary-name" id="formulary-lastName">
          <label for="lastName" class="formulary-label"></label>
        </div>

        <div class="formulary-name-input">
          <input type="text" class="formulary-input" name="lastName" id ="lastName" placeholder="Apellido" maxlength="16">
          <i class="formulary-validation fas fa-skull-crossbones"></i>
          <p class="formulary-fault">El Apellido tiene que ser de 3 a 16 digitos, solo debe contener letras.</p>
        </div>
      
        <div class="formulary-name" id="formulary-email">
          <label for="email" class="formulary-label"></label>
        </div>

        <div class="formulary-name-input">
          <input type="email" class="formulary-input" name="email" id ="email" placeholder="Correo electronico">
          <i class="formulary-validation fas fa-skull-crossbones"></i>
          <p class="formulary-fault">El correo electronico debe de ser gmail. </p>
        </div>
        
        <div class="formulary-name" id="formulary-password">
          <label for="password" class="formulary-label"></label>
        </div>

        <div class="formulary-name-input">
          <input type="password" class="formulary-input" name="password" id ="password" placeholder="Contraseña" maxlength="16">
          <i class="formulary-validation fas fa-skull-crossbones"></i>
          <p class="formulary-fault">La contraseña debe de tener maximo 16 digitos y debe de terner mayusculas,minusculas o alguno de los siguientes simbolos /_.@</p>
        </div>

        <div class="formulary-name" id="formulary-passwordConfirmation">
          <label for="passwordConfirmation" class="formulary-label"></label>
        </div>

        <div class="formulary-name-input">
          <input type="password" class="formulary-input" name="passwordConfirmation" id ="passwordConfirmation" placeholder="Confirmar contraseña" maxlength="16">
          <i class="formulary-validation fas fa-skull-crossbones"></i>
          <p class="formulary-fault">Ambas contraseñas deben de ser iguales.</p> 
        </div>

        <div class="formulary-msj" id="formulary-msj">
          <p><b>Error:</b>Por completar el formulario.</p>
        </div>

        <div>
         <button type="submit" id="btn-validation">Registrarte</button>
        </div>

        <div class="btn-google">
          <button><i class="fab fa-google"></i> Registrate con google</button>
        </div>
    </section>`;
  const formularyRegistration = document.querySelector('#register-second-page');
  console.log(formularyRegistration);
  const inputs = document.querySelectorAll('.formulary-name-input input');
  console.log(inputs);

  // formularyRegistration.addEventListener('submit', (e) => {
  //   e.preventDefault();
  // });
  // inputs.forEach((input) => {
  //   input.addEventListener('keyup', () => {
  //     console.log('tecla levantada');
  //   });
  // });

  // export const expression = {
  //   name: /^[a-zA-Z\_\-]{4,16}$/, // Letras guion y guion_bajo.
  //   lasName: /^[a-zA-Z\_\-]{4,16}$/, // Letras guion y guion_bajo.
  //   password: /^,{4,12}$/, // 4 a 12 digitos.
  //   email: /^[a-zA-Z0-9_.+-]+@[zA-Z0-9-.]+$/, // 7 a 14 numeros.
  // };
  return countRegister;
};
