import { allDataPost } from './view/templateHome.js';

export const loginGoogle = () => {
  // ***FUNCION PARA EL INICIO DE SESION CON GOOGLE Y GUARDAR DATOS EN FIREBASE***
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      window.location.hash = '#/Home';
      // This gives you a Google Access Token. You can use it to access the Google API.
      const user = result.user;
      return user;
    });
  return loginGoogle;
};

// ******FUNCION PARA LA VERIFICACION MEDIANTE UN CORREO CON FIREBASE******
export const userRegister = (email, password, userName) => {
  const userCreation = firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      window.location.hash = '#/Confirmacion';
      userCredential.user.updateProfile({
        displayName: userName,
      }).then(() => {
        const btnUrl = {
          url: 'http://localhost:5000',
        };
        firebase.auth().currentUser.sendEmailVerification(btnUrl);
      });
    });
  return userCreation;
};

// **FUNCION QUE VERIFICA SI EL CORREO ELECTRONICO SE ENCUENTRA REGISTRADO**
export const loginUser = (emailLogin, passwordLogin) => {
  const validationUserLogin = firebase
    .auth()
    .signInWithEmailAndPassword(emailLogin, passwordLogin)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      window.location.hash = '#/Home';
      return user;
    });
  return validationUserLogin;
};

// ***********FUNCION DE CREAR COLECCION**************
export const dataPost = (nameuid, content, uid) => {
  const db = firebase.firestore();
  // console.log(db);
  db.collection('posts').add({
    namePost: nameuid,
    contentPost: content,
    uidUser: uid,
    like: [],
  });
  /* .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    }); */
  return db;
};

// ************FUNCION DE MOSTRAR LA FUNCION DENTRO DE LA TARGETA DE POST*********
export const receiveData = () => {
  const db = firebase.firestore();
  const receive = db.collection('posts').get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        allDataPost(doc.data(), doc.id);
        // console.log(doc.id, '=>', doc.data());
      });
    });
  return receive;
};
<<<<<<< HEAD
=======

// ********FUNCION QUE ELIMINA EL POST*******
export const deletePost = (id) => {
  const db = firebase.firestore();
  // const idPost = firebase.fireStore.collection('posts').doc.id;
  // console.log('daletePost', id);
  const deleteComment = db.collection('posts')
    .doc(id).delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
  return deleteComment;
};

export const removePost = () => {
  const db = firebase.firestore();
  const editPost = db.collection('posts').doc("");

  // Set the "capital" field of the city 'DC'
  return editPost.update({
    contentPost: content,
  })
    .then(() => {
      console.log('Document successfully updated!');
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
};
>>>>>>> df78b901a118d35ec1a87c722dc2e8aa112c3599
