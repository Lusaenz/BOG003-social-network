import { datePost } from '../firebase.js';

export const home = () => {
  const wall = ` 
  <header class="header">
    <nav>
      <div class="logo-words">
        <img src="img/FIMPRO-LETRA.png" alt="#" width="100">
      </div>
      <ul>
        <li><i class="fas fa-home"></i></li>
        <li><i class="fas fa-power-off"></i></li>
      </ul>
    </nav>
  </header>
  <main>
  <div class="error"></div>
    <section class="publication parallax">
      <article class="space-mjs">
        <div class="edit">
          <button>Editar</button>
        </div>
        <div>
          <textarea name="" id="input-post" placeholder="Cuéntanos cual fue la ultima película que viste, danos tu critica"></textarea>
        </div>
        <div class="share">
          <button id="btn-publication">Publicar</button>
        </div>
      </article>
    </section>
  </main>
  <footer class="container-footer">
    <p><b>Desarrollado por:</b>
    Leidy Paez-Luisa Saenz-Maria Chacon</p>
    <hr>
    <p>Derechos de autor reservados © 2021</p>
  </footer>
  `;
  const containerHome = document.createElement('div');
  containerHome.innerHTML = wall;

  const btnPublication = containerHome.querySelector('#btn-publication');
  btnPublication.addEventListener('click', () => {
    const inputPost = document.querySelector('#input-post').value;
    const namUser = firebase.auth().currentUser.displayName;
    const uid = firebase.auth().currentUser.uid;
    datePost(inputPost, namUser, uid)
      .catch((error) => {
        const errorCode = error.code;
        const errorPost = document.querySelector('.error');
        switch (errorCode) {
          default:
            errorPost.innerHTML = 'No se puede realizar publicaciones vacias';
            break;
        }
      });
  });
  return containerHome;
};
