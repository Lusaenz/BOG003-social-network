import { registration } from '../lib/view/templateRegistration.js';

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('user', user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log('error', errorMessage);
      // ...
    });
  return loginGoogle;
};

/* export const RegisterVerification = (name) => {
  // const name = firebase.auth().currentUser.displayName;
  userCredential.user.updateProfile
  console.log(name);
  firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
      // Email verification sent
      // ...
    });
  return RegisterVerification;
}; */
export const userRegister = (email, password, userName) => {
  const userCreation = firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      userCredential.user.updateProfile({
        displayName: userName,
      }).then(() => {
        const btnUrl = {
          url:'http://localhost:5000',
        };
     firebase.auth().currentUser.sendEmailVerification(btnUrl);

  });
 });
    // eslint-disable-next-line
    /* .then(function () {
      RegisterVerification();
      console.log(RegisterVerification);
    }); */
  // eslint-disable-next-line
  /*.catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, 'tu');
    // ..
    }); */
  return userCreation;
};
