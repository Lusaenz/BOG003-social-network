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
export const dataPost = (nameuid, content, uid) => {
  const db = firebase.firestore();
  // console.log(db);
  db.collection('posts').add({
    namePost: nameuid,
    contentPost: content,
    uidUser: uid,
    like: [],
  });
  return db;
};

export const receiveData = () => {
  const db = firebase.firestore();
  const receive = db.collection('posts').get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        allDataPost(doc.data());
        // console.log(doc.id, '=>', doc.data());
      });
    });
  return receive;
};
