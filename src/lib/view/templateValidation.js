export const messageConfirmation = () => {
  const messageEmail = `
    <section>
    <div class="photo-two">
      <img src="img/git-photo-two.gif" alt="photo-two" width="250">
    </div>
    <div class="confirmMessage">
      <p>Hemos enviado un correo electronico a tu cuenta, porfavor verifica tu direccion de correo electronico, gracias.</p>
    </div>
  </section>`;
  const containerMessage = document.createElement('div');
  containerMessage.innerHTML = messageEmail;
  return containerMessage;
};
