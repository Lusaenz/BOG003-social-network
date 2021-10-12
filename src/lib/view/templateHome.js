import { dataPost, receiveData } from '../firebase.js';
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
    <section class="publication parallax">
      <article class="space-mjs">
        <div>
          <textarea name="" id="input-post" placeholder="Cuéntanos cual fue la ultima película o serie que viste, danos tu critica"></textarea>
        </div>
        <div class="error"></div>
        <div class="share">
          <button id="btn-publication">Publicar</button>
        </div>
      </article>
    </section>
    <div class ="container-comment"></div>
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
  // receiveData();
  const btnPublication = containerHome.querySelector('#btn-publication');
  btnPublication.addEventListener('click', () => {
    const inputPost = document.querySelector('#input-post');
    const namUser = firebase.auth().currentUser.displayName;
    const uid = firebase.auth().currentUser.uid;
    const errorPost = document.querySelector('.error');
    if (inputPost.value === '') {
      errorPost.innerHTML = 'No se puede realizar publicaciones vacias';
    } else {
      errorPost.innerHTML = '';
      dataPost(namUser, inputPost.value, uid);
      const containerComment = document.querySelector('.container-comment');
      containerComment.innerHTML = '';
      receiveData();
      inputPost.value = '';
    }
  });
  return containerHome;
};

export const allDataPost = (valuePost, id) => {
  const containerComment = document.querySelector('.container-comment');
  const targetDiv = document.createElement('div');
  targetDiv.setAttribute('class', 'publication parallax');
  targetDiv.innerHTML += `
        <section id="container-comment" class="publication parallax">
          <article class="space-mjs">
            <div class="edit">
              <button>Editar</button>
            </div>
              <div class="profile-user">
                <button class="btn-profile"><i class="fas fa-theater-masks"></i></button>
                <p class="name-post">${valuePost.namePost}</p>
              </div>
            <div>
              <textarea id="input-post" class="comment-post" disabled>${valuePost.contentPost}</textarea>
            </div>
            <div class="icons-comment">
              <div class="icono-medal"><i class="fas fa-medal"></i></div>
              <div class="icono-delete" data-id="${valuePost.id}"><i class="fas fa-trash-alt"></i></div>
            </div>
          </article>
        </section>`;
  console.log(id);
  containerComment.appendChild(targetDiv);
  let contentId = '';
  const iconoDelete = containerComment.querySelectorAll('.icono-delete');
  iconoDelete.forEach((item) => {
    item.addEventListener('click', (event) => {
      // event.preventDefault();
      contentId = event.target.dataset.id;
      deletePost(contentId);
    });
  });
};
