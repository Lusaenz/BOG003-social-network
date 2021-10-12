import {
  dataPost,
  receiveData,
  deletePost,
  editPost,
} from '../firebase.js';

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
  const allDataPost = () => {
    receiveData()
      .then((querySnapshot) => {
        const containerComment = document.querySelector('.container-comment');
        querySnapshot.forEach((doc) => {
          const targetDiv = document.createElement('div');
          targetDiv.setAttribute('class', 'publication parallax');
          targetDiv.innerHTML += `
          <section id="container-comment" class="publication parallax">
            <article class="space-mjs">
              <div class="edit">
                <button class="btn-edit">Editar</button>
              </div>
                <div class="profile-user">
                  <button class="btn-profile"><i class="fas fa-theater-masks"></i></button>
                  <p class="name-post">${doc.data().namePost}</p>
                </div>
              <div>
                <textarea id="input-post" class="comment-post" data-id="${doc.id}" disabled>${doc.data().contentPost}</textarea>
              </div>
              <div class="icons-comment">
                <div class="icono-medal"><i class="fas fa-medal"></i></div>
                <div class="icono-delete"><i class="fas fa-trash-alt" data-id="${doc.id}"></i></div>
              </div>
            </article>
          </section>`;
          // console.log(doc.id);
          containerComment.appendChild(targetDiv);
          let contentId = '';
          const iconoDelete = containerComment.querySelectorAll('.fa-trash-alt');
          iconoDelete.forEach((item) => {
            item.addEventListener('click', (event) => {
              alert('Estas segur@ de eliminar esta publicacion');
              contentId = event.target.dataset.id;
              // console.log(event.target.dataset.id);
              deletePost(contentId).then(() => {
                containerComment.innerHTML = '';
                allDataPost();
              });
            });
          });
          const btnEdit = containerComment.querySelectorAll('.btn-edit');
          btnEdit.forEach((btn) => {
            btn.addEventListener('click', (event) => {
              const textareaEdit = containerComment.querySelector('#input-post');
              containerComment.innerHTML = textareaEdit;
              contentId = event.target.database.id;
              editPost(contentId).then(() => {
              });
            });
          });
        });
      });
  };
  const containerHome = document.createElement('div');
  containerHome.innerHTML = wall;
  allDataPost();
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
      dataPost(namUser, inputPost.value, uid).then(() => {
        const containerComment = document.querySelector('.container-comment');
        containerComment.innerHTML = '';
        allDataPost();
        inputPost.value = '';
      });
    }
  });
  return containerHome;
};
