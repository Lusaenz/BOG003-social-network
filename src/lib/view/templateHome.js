import {
  createPost,
  receiveData,
  deletePost,
  editPost,
  signOut,
} from '../firebase.js';

export const home = () => {
  // elementos del HTML en el muro.
  const wall = `
  <header class="header">
    <nav>
      <div class="logo-words">
        <img src="img/FIMPRO-LETRA.png" alt="#" width="100">
      </div>
      <ul>
        <li><i class="fas fa-home"></i></li>
        <li><i id="btn-off" class="fas fa-power-off"></i></li>
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
          const postUid = doc.data().uidUser;
          const uid = firebase.auth().currentUser.uid;
          const targetDiv = document.createElement('div');
          targetDiv.setAttribute('class', 'publication parallax');
          targetDiv.innerHTML += `
          <section id="post-${doc.id}" class="publication parallax">
            <article class="space-mjs">
              ${postUid === uid ? `
            <div class="edit">
              <button id="edit-${doc.id}" class="btn-edit" data-id="${doc.id}">Editar</button>
            </div>` : ''}
                <div class="profile-user">
                  <button class="btn-profile"><i class="fas fa-theater-masks"></i></button>
                  <p class="name-post">${doc.data().namePost}</p>
                </div>
              <div id="${doc.id}">
                <textarea id="input-${doc.id}" data-id="${doc.id}" class="comment-post" disabled >${doc.data().contentPost}</textarea>
              </div>
              <div class="btn-confirm-change">
                <button id="btn-confirm-${doc.id}" class="confirm-change" data-id="${doc.id}">Aceptar cambios</button>
              </div>
              <div id="error-${doc.id}" class="error-comment"></div>
              <div class="icons-comment">
                <div class="icono-medal"><i class="fas fa-medal" data-id="${doc.id}"></i></div>
                ${postUid === uid ? `
                <div id="delete-${doc.id}" class="icono-delete" ><i class="fas fa-trash-alt" data-id="${doc.id}"></i></div>` : ''}

              </div>
            </article>
          </section>`;
          containerComment.appendChild(targetDiv);
          let contentId = '';
          const iconDelete = containerComment.querySelectorAll('.fa-trash-alt');
          iconDelete.forEach((item) => {
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
          //
          const btnEdit = containerComment.querySelectorAll('.btn-edit');
          btnEdit.forEach((btn) => {
            btn.addEventListener('click', (event) => {
              const contentIdEdit = event.target.dataset.id;
              const textareaEdit = containerComment.querySelector(`#input-${contentIdEdit}`);
              textareaEdit.removeAttribute('disabled');
              const acceptChanges = containerComment.querySelector(`#btn-confirm-${contentIdEdit}`);
              // const acceptChanges = containerComment.querySelector
              // (`.confirm-change[data-id="${contentIdEdit}"]`);
              acceptChanges.style.display = 'block';
              const btnConfirmEdit = containerComment.querySelectorAll('.confirm-change');
              btnConfirmEdit.forEach((confirm) => {
                confirm.addEventListener('click', async (e) => {
                  const errorComment = containerComment.querySelector(`#error-${contentIdEdit}`);
                  if (textareaEdit.value === '') {
                    console.log('Se esta probando', textareaEdit.value);
                    errorComment.innerText = 'No se puede realizar publicaciones vacias.';
                  } else {
                    errorComment.innerText = '';
                    const contentIdEditConfirm = e.target.dataset.id;
                    await editPost(contentIdEditConfirm, textareaEdit.value);
                    acceptChanges.style.display = 'none';
                    textareaEdit.setAttribute('disabled', 'add-disabled');
                  }
                });
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
      createPost(namUser, inputPost.value, uid).then(() => {
        const containerComment = document.querySelector('.container-comment');
        containerComment.innerHTML = '';
        allDataPost();
        inputPost.value = '';
      });
    }
  });
  const btnOff = containerHome.querySelector('#btn-off');
  btnOff.addEventListener('click', () => {
    signOut();
  });
  return containerHome;
};
