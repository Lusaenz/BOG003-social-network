![img-logo](https://github.com/Lusaenz/BOG003-social-network/blob/main/src/img/FIMPRO-LETRA.png)

# Social Network

## Índice

* [1. Descripcion](#1-descripcion)
* [2. Diseño e investigacion UX](#2-diseño-e-investigacion-UX)
* [3. Hitorias de usuario](#3-consideraciones-generales)
* [4. Criterios de aceptacion](#4-criterios-de-aceptacion)
* [5. Test de usabilidad](#5-Test-usablidad)
* [6. Autoria](#6-autoria)
* [7. Recursos](#7-pistas-tips-y-lecturas-complementarias)

# 1. Descripcion
Filmpro es una aplicación para los críticos de las películas o los curiosos que quieren ver recomendación de alguna serie y película que los demás usuarios recomienden.
Pueden crearse una cuenta, comentantar, editar y eliminar el post.

### 1.1 Usuario
Esta aplicacion va dirijida a los amantes de la cinematografia y series tanto jovenes como adultos,
donde ellos tienen un espacio donde puedan comentar sus gustos y/o opiniones de cada una de ellas,se podra ir generando una comunidad apasionada por las peliculas.
# 2. Diseño e investigacion UX
Pensamos en una red social que pueda conectar a las personas con afinidades y gustos similares acerca de peliculas o series, quisimos brindar una app que sea facil de navegar y entender, con tonos oscuros para darle un ambiente de cine para que no canse la vista del usuario, manejando un contraste verde neon para resaltar sombras e iconos de la aplicacion, se decidio agregar un fondo para seguir con la tematica de peliculas.
Tras la investigacion se obtuvo dos tipos de diseño (baja fidelidad - alta fidelidad).
### Diseño baja fidelidad
![Prototipos-baja-fidelidad-login-registro](https://github.com/Lusaenz/BOG003-social-network/blob/main/src/img/prototipos%20de%20baja%20fidelidad.png)

### Diseño alta fidelidad
* Para ver mejor los prototipos en el siguiente link [link-figma](https://www.figma.com/file/eBO6ZCWj1TBF6NtxR2EydG/social-NetWord-team-library?node-id=321%3A3)
## 3. Historias de usuario
### H.U - 1 - 2. pantalla de registro.
YO como usuario quiero poder registrarme en Filmspro para pertenecer a una comunidad con mis mismos gustos por las películas.

**Criterios de aceptación**
- El usuario lo primero que visualizara es el nombre de la App.
- Al lado de nombre encontrara dos input para el correo electrónico y la contraseña si el usuario ya se encuentra registrado, luego se dirigirá al  botón de iniciar sesión. 
- Si el usuario no esta registrado se dirigirá  a un botón de regístrate aquí y le aparecerá el formulario de registro.
- El usuario encontrara un botón para iniciar sesión.
- El correo electrónico del usuario  será validado.
- El formulario de registro debe validarse
- informar al usuario de errores durante el registro.
- Debe ser reponsive
**Definición de terminada**
- Diseño de alta fidelidad.
- Diseño de baja fidelidad.
- Que esta vista de registro sea una ruta de SPA.
- Clonar repositorio de git.
- Tener ramas del repositorio.
- Debe ser una SPA.
- Deben haber recibido code review de al menos una compañera de otro equipo.
- Hicieron pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.

Los tonos que se manejaron son tonos oscuros con el logo en la parte de arriba cuando la pagina es responsive y a un lado cuando la pagina es desktop.Se hizo el registro con google en la segunda historias de usuario para que tanto el registro normal y el registro con google esten totalmente terminados.
***
![imagen-de-registro-celular](https://github.com/Lusaenz/BOG003-social-network/blob/main/src/img/1era-verificacion-form.png)
![imagen-iniciar-sesion](https://github.com/Lusaenz/BOG003-social-network/blob/main/src/img/iniciar_sesion.png)
![imagen-iniciar-sesion-google](https://github.com/Lusaenz/BOG003-social-network/blob/main/src/img/iniciar-sesion-google.png)
### UH - 3. verificacion de cuenta via email
Yo como usuario quiero poder recibir un correo electrónico de filmspro para confirmar mi dirección correo electrónico y poder iniciar sesión.

**Criterios de aceptación**
- El usuario recibirá un correo electrónico donde deberá confirmar la validación de la cuenta.
- Luego que el usuario de confirmar cuenta le aparecerá una ventana donde le confirme su nueva cuenta y pueda iniciar sesión en la app.
- Si el usuario ya dio confirmar al correo, este quedara deshabilitado.
**Definición de terminada**
- Diseño de baja fidelidad.
- Test de usabilidad.
- Debe ser una SPA.
- Deben haber recibido code review de al menos una compañera de otro equipo.
- Hicieron pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
![imagen-verificacion-email](https://github.com/Lusaenz/BOG003-social-network/blob/main/src/img/mensaje-conf-email.png)
![imagen-verificacion-por-correo](https://github.com/Lusaenz/BOG003-social-network/blob/main/src/img/mensaje-email.png)
![imagen-verificacion-final](https://github.com/Lusaenz/BOG003-social-network/blob/main/src/img/verificacion-continuar.png)
![correo-ya-registrado](https://github.com/Lusaenz/BOG003-social-network/blob/main/src/img/1era-verificacion-form.png)
### H.U -4 Validacion de cada uno de los inputs
yo como usuario quiero poder validarlos input del inicio de sesión con correo y contraseña en Filmspro para validar mis datos.

**Criterios de aceptación** 
- El usuario lo primero que visualizara es el nombre de la App.
- Al lado de nombre encontrara dos input para el correo electrónico y la contraseña.
- El formulario de inicio de sesión debe validarse.
- informar al usuario de errores durante el registro.
- Debe ser reponsive
**Definición de terminada**
- Diseño de alta fidelidad.
- Diseño de baja fidelidad.
- Que esta vista de registro sea una ruta de SPA.
- Deben haber recibido code review de al menos una compañera de otro equipo.
- Hicieron pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.

En esta historia de usuario se hicieron validaciones por cada uno de los input para que el usuario tenga un registro claro y seguro.

![imagen-de-inputs-validados](https://github.com/Lusaenz/BOG003-social-network/blob/main/src/img/verificacion-contrase__a.png)
![imagen-verificacion-registro](https://github.com/Lusaenz/BOG003-social-network/blob/main/src/img/verificacion-todo-form.png)

### H.U -5 Creacion de la publicacion
Yo como usuario quiero poder crear una publicación para compartir mi opinión acerca de una película.

**Criterios de aceptación** 
- El usuario lo primero que visualizara al entrar al home de la app, será un espacio donde tendrá un mensaje de "Cuéntanos cual fue la ultima película que viste, y déjanos tu opinión.".
- El usuario podrá darle click en ese espacio y escribir su critica.
-Debe ser reponsive
**Definición de terminada**
- Diseño de alta fidelidad.
- Diseño de baja fidelidad.
- Que esta vista de Home sea una ruta de SPA.
- Debe ser una SPA.
- Deben haber recibido code review de al menos una compañera de otro equipo.
- Hicieron pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
![creacion-de-la-publicacion](https://github.com/Lusaenz/BOG003-social-network/blob/main/src/img/verficacion-espacio-vacio-publicacion.png)
![verificacion-espacio-vacios](https://github.com/Lusaenz/BOG003-social-network/blob/main/src/img/verficacion-espacio-vacio-publicacion.png)

### H.U -6 Edicion de las publicaciones
Yo como usuario quiero poder editar una publicación para corregir una opinión acerca de una película.

**Criterios de aceptación** 
- El usuario entrara un botón único para poder editar la publicación. 
- a darle clic al botó, se  habilitara la sección de la publicación para que pueda volver a escribir, y se agregara un nuevo botón para aceptar los cambios realizados.
- Se verificara que al aceptar los cambios el post no este vacío.
- Debe ser reponsive
**Definición de terminada**
- Diseño de alta fidelidad.
- Diseño de baja fidelidad.
- Agregar la funciones de firebase.
- Agregar las promesas y validaciones necesarias para esta H.U.
- Debe ser una SPA.
- Deben haber recibido code review de al menos una compañera de otro equipo.
- Hicieron pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
![imagen-boton-editar](https://github.com/Lusaenz/BOG003-social-network/blob/main/src/img/boton-editar.png)
### H.U -7 Eliminacion de la publicacion

Yo como usuario quiero poder borrar una publicación para eliminar una opinión acerca de una película.

**Criterios de aceptación**
- El usuario entrara un icono único de basurita para poder eliminar la publicación. 
- a darle clic al icono, aparecerá  un alert para confirma la eliminación del post 
- Debe ser responsive
**Definición de terminada**
- Diseño de alta fidelidad.
- Diseño de baja fidelidad.
- Agregar la funciones de firebase.
- Agregar las promesas y validaciones necesarias para esta H.U.
- Debe ser una SPA.
- Deben haber recibido code review de al menos una compañera de otro equipo.
- Hicieron pruebas de usabilidad e incorporaron el feedback de los usuarios como mejoras.
![imagen-boton-eliminar](https://github.com/Lusaenz/BOG003-social-network/blob/main/src/img/boton-eliminar.png)
# 4. Criterios de aceptacion

- [✅] **Uso de linter (ESLINT)**

- [✅] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [✅] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

- [✅] **Callbacks**


### Control de Versiones (Git y GitHub)

- [✅] **Git: Instalación y configuración**

- [✅] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [✅] **GitHub: Despliegue con GitHub Pages**

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)

### UX (User eXperience)

- [✅] **Diseñar la aplicación pensando en y entendiendo al usuario**

- [✅] **Crear prototipos para obtener feedback e iterar**

- [✅] **Aplicar los principios de diseño visual (contraste, alineación, jerarquía)**

- [✅] **Planear y ejecutar tests de usabilidad**

### Firebase

- [✅] **Firebase Auth**

- [✅] **Firestore**
### 4.1 Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

[✅] Debes definir cuál será el flujo que seguirá el usuario dentro de tu aplicación
y, con eso, diseña la Interfaz de Usuario (UI por sus siglas en inglés) que
siga este flujo.
### 4.2 Responsive
[✅] Debe verse bien en dispositivos de pantallas grandes
(computadoras/es, laptops, etc.) y pequeñas (_tablets_, celulares, etc.). Te
sugerimos seguir la técnica de _`mobile first`_ (más detalles sobre esta técnica
al final).
#### 4.3 Creación de cuenta de usuario e inicio de sesión

* [✅] _Login_ con Firebase:
  - Creación de cuenta de acceso y autenticación con cuenta de correo y
    contraseña, y también con una cuenta de Google.
* [✅] Validaciones:
  - Solamente se permite el acceso a usuarios con cuentas válidas.
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
* [✅] Comportamiento:
  - Al enviarse el formulario de registro o inicio de sesión, debe validarse.
  - Si hay errores, se deben mostrar mensajes descriptivos para ayudar al
  [✅] usuario a corregirlos.
#### 4.4 Muro/timeline

* [✅] Validaciones:
  - Al publicar, se debe validar que exista contenido en el _input_.
* [✅] Comportamiento:
  - Al recargar la aplicación, se debe verificar si el usuario está _logueado_
    antes de mostrar contenido.
  - Poder publicar un _post_.
  - Poder eliminar un post específico.
  - Pedir confirmación antes de eliminar un _post_.
  - Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página debo de poder ver los textos editados.
# 5 Test de usabilidad

Apartir de las 3 entrevistas realizadas al inicio del proyecto, logramos definir la tematica, la gama de color y la problematica a trabajar.
Tras recibir feedback de los usuarios en diversos momentos del proyecto logramos ir mejorando la red social en temas como:
 - Colores.
 - Decidimos implementar un degrade de tono azul y gris a la imagen de fondo de la aplicacion para
   evitar contraste y cansancio en la vista del usuario.
 - Mejoramos el espacio del email en el area del formulario de registro para que cualquier email   
   registrarse en la aplicacion.
 - Se hizo mejora en la tipografia para que pudiera ser mas legible.
 - Se unificaron todos los contrastes de color verde.
# 6. Autoria

 - este proyecto es de autoria de Leidy paez - Luisa saenz - Maria chacon

# Recursos

 - Modulos: Export
 - Mobile First: el enfoque actual del diseño web móvil - 1and1
 - Mobile First - desarrolloweb.com
 - Mobile First - ZURB
 - Mobile First Is NOT Mobile Only - Nielsen Norman Group
 - Modulos: Import
 - Diseño web, responsive design y la importancia del mobile first - Media Click
