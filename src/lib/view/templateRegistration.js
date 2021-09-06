export const registration = () => {
    //const viewRegister = document.createElement("section");
    const countRegister =
    `<section id="register-second-page" class="register-second-page">
        <input type="text" placeholder="Nombre">
        <input type="text" placeholder="Apellido">
        <input type="email" placeholder="Correo electronico">
        <input type="password" placeholder="Contraseña">
        <input type="password" placeholder="Confirmar contraseña"> 
        <a href="#/Registrarte">Registrarte</a>
        <button>Registrate con google</button>
    </section>`
    //viewRegister.innerHTML= countRegister;

    return countRegister;
}