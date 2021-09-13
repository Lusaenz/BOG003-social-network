export const registration = () => {
  const countRegister = `
    <div class="logo">
      <img src="img/FILMPRO.png" alt="logo" width="350">
    </div>
    <section id="register-second-page" class="register-second-page">
        <div class="formulary-name" id="formulary-name">
          <label for="usuario" class="formulary-label"></label>
          <div class="furmulary-input">
             <input type="text" class="formulary-input" name="user" id="usuario" placeholder="Nombre" maxlength="16">
             <i class="formulary-validation-status fas fa-skull-crossbones"></i>
         </div>
          <p class="formulary-fault">El nombre tiene que ser de 3 a 16 digitos,solo se debe contener letras.</p>
       </div>


          <div class="formulary-name" id="formulary-LastName">
             <label for="LastName" class="formulary-label"></label>
              <div class="furmulary-name-input">
                <input type="text" class="formulary-input" name="LastName" id="LastName" placeholder="Apellido" maxlength="16">
                <i class="formulary-validation-status fas fa-skull-crossbones"></i>
             </div>
             <p class="formulary-fault">El Apellido tiene que ser de 3 a 16 digitos,solo se debe contener letras.</p>
          </div>

          <div class="formulary-name" id="formulary-email">
             <label for="email" class="formulary-label"></label>
             <div class="furmulary-name-input">
               <input type="text" class="formulary-input" name="email" id="email" placeholder="correo electronico" maxlength="16">
               <i class="formulary-validation-status fas fa-skull-crossbones"></i>
           </div>
            <p class="formulary-fault">El correo electronico debe ser gmail.</p>
         </div>

          <div class="formulary-name" id="formulary-password">
             <label for="password" class="formulary-label"></label>
             <div class="furmulary-name-input">
               <input type="password" class="formulary-input" name="password" id="password" placeholder="Contraseña" maxlength="16">
               <i class="formulary-validation-status fas fa-skull-crossbones"></i>
             </div>
              <p class="formulary-fault">la Contraseña debe tener maximo 16 digitos y debe de tener mayusculas y minusculas o alguno de los siguientes simbolos /_.@.</p>
           </div>

          <div class="formulary-name" id="formulary-passwordConfirmation">
             <label for="passwordConfirmation" class="formulary-label"></label>
             <div class="furmulary-name-input">
               <input type="password" class="formulary-input" name="passwordConfirmation" id="passwordConfirmation" placeholder="Confirmar Contraseña" maxlength="16">
              <i class="formulary-validation-status fas fa-skull-crossbones"></i>
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

  const formularyRegistration = document.querySelector('.register-second-page');
  console.log(formularyRegistration);
  const inputs = document.querySelectorAll('.formulary-input input');
  console.log(inputs);

  // formularyRegistration.addEventListener('submit', (e) => {
  //   e.preventDefault();
  // });
  // inputs.forEach((input) => {
  //   input.addEventListener('keyup', () => {
  //     console.log('tecla levantada');
  //   });
  // });

  return countRegister;
};
