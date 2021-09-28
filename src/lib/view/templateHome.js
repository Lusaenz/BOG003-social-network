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
        <div class="edit">
          <button>Editar</button>
        </div>
        <div>
          <textarea name="" id="" placeholder="Cuéntanos cual fue la ultima película que viste, danos tu critica"></textarea>
        </div>
        <div class="share">
          <button>Publicar</button>
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
  return wall;
};
