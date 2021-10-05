// importamos la funcion que vamos a testear
import { loginUser } from '../src/lib/firebase.js';

const onlyRegister = [
  {
    emailLogin: 'correo@correo.com',
    passwordLogin: '1234Lprueba',
  },
];

global.firebase = {
  auth: () => {
    return {
      signInWithEmailAndPassword: (emailLogin, passwordLogin) => {
        const user = onlyRegister.find((user) => user.emailLogin === emailLogin);
        if (user) {
          if (user.passwordLogin === passwordLogin) {
            return Promise.resolve({ user });
          } else {
            return Promise.reject({ errorCode: 'auth/wrong-password' });
          }
        } else {
          return Promise.reject ({ errorCode: 'auth/user-not-found' });
        }
      },
    };
  },
};

describe('loginUser', () => {
  it('se espera mensaje de contraseña fallida', () => {
    return loginUser('correo@correo.com', 'xxxx').catch((innerHTML) => {
      expect(innerHTML).tobe('Usuario no registrado, porfavor registrese');
    }),
  });
});
