export const registration = () => {
    //const viewRegister = document.createElement("section");
    const countRegister =
    `<section id="register-second-page" class="register-second-page">

    <div class="formulary-name" id="formulary-name">
      <label for="name" class="formulary-label">Nombre</label>
    </div>
    <div class="formulary-name-input">
      <input type="text" class="formulary-input" name="user" id ="user" placeholder="Andrea" maxlength="16">
      <i class="formulary-validation fa-solid fa-triangle-exclamation"></i>
    </div>
    <p class="formulary-fault">El nombre tiene que ser de 3 a 16 digitos.</p>

    <div class="formulary-name" id="formulary-lastName">
      <label for="lastName" class="formulary-label">Apellido</label>
    </div>
    <div class="formulary-name-input">
      <input type="text" class="formulary-input" name="lastName" id ="lastName" placeholder="Suarez" maxlength="16">
      <i class="formulary-validation fa-solid fa-triangle-exclamation"></i>
    </div>
    <p class="formulary-fault">El Apellido tiene que ser de 3 a 16 digitos.</p>

    <div class="formulary-name" id="formulary-email">
      <label for="email" class="formulary-label">Correo electronico</label>
    </div>
    <div class="formulary-name-input">
      <input type="email" class="formulary-input" name="email" id ="email" placeholder="@gmail.com">
      <i class="formulary-validation fa-solid fa-triangle-exclamation"></i>
    </div>
    <p class="formulary-fault">El correo electronico debe de ser gmail. </p>
   
    <div class="formulary-name" id="formulary-password">
      <label for="password" class="formulary-label">Contraseña</label>
    </div>
    <div class="formulary-name-input">
      <input type="password" class="formulary-input" name="password" id ="password" placeholder="Contraseña" maxlength="16">
      <i class="formulary-validation fa-solid fa-triangle-exclamation"></i>
    </div>
    <p class="formulary-fault">La contraseña debe de tener maximo 
      16 digitos y debe de terner mayusculas,minusculas o alguno de
       los siguientes simbolos /_.@</p>
    
    <div class="formulary-name" id="formulary-passwordConfirmation">
      <label for="passwordConfirmation" class="formulary-label">Confirmar contraseña</label>
    </div>
    <div class="formulary-name-input">
      <input type="password" class="formulary-input" name="passwordConfirmation" id ="passwordConfirmation" placeholder="Confirmar contraseña" maxlength="16">
      <i class="formulary-validation fa-solid fa-triangle-exclamation"></i>
    </div>
    <p class="formulary-fault">Ambas contraseñas deben de ser iguales.</p> 
     
    <div class="formulary-msj" id="formulary-msj">
      <p> <i class="formulary-validation fa-solid fa-triangle-exclamation"></i> <b>Error:</b>Por completar el formulario.</p>
    </div>
    <a href="#/Registrarte">Registrarte</a>
    <button>Registrate con google</button>
</section>
    `
    //viewRegister.innerHTML= countRegister;

    return countRegister;
}