export const confirmMessage = () => {
  const confirmEmail = `
     <p>Hemos enviado un correo electronico a tu cuenta, porfavor verifica tu direccion de correo electronico, gracias.</p>
 `;

  const message = document.createElement('p');
  message.innerHTML = confirmEmail;
  return confirmEmail;
};
