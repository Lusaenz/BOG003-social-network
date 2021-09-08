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
        <p class="formulary-fault">El nombre tiene que ser de 3 a 16 digitos.</p>
      </div>
      
      <div class="formulary-name" id="formulary-lastName">
        <label for="lastName" class="formulary-label"></label>
      </div>

      <div class="formulary-name-input">
        <input type="text" class="formulary-input" name="lastName" id ="lastName" placeholder="Apellido" maxlength="16">
        <i class="formulary-validation fas fa-skull-crossbones"></i>
        <p class="formulary-fault">El Apellido tiene que ser de 3 a 16 digitos.</p>
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

      <div class="btn-register">
        <a href="#/Registrarte">Registrarte</a>
      </div>

      <div class="btn-google">
        <button><i class="fab fa-google"></i> Registrate con google</button>
      </div>
    </section>`;

  return countRegister;
};
