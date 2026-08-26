// Inyecta el header y footer en todas las páginas
// Usa las clases y variables CSS propias de Yoga Kids Club (definidas en el <style> de cada página)
// NO depende de Tailwind
document.addEventListener('DOMContentLoaded', function() {

  // Crear el HTML del header
  const headerHTML = `
    <header>
      <div class="nav-wrap">
        <a href="index.html" class="logo">
          <img src="favicon.png" alt="Yoga Kids Club">
          Yoga Kids Club
        </a>
        <nav class="nav-links">
          <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="index.html#metodologia">Metodología</a></li>
            <li><a href="servicios.html">Clases</a></li>
            <li><a href="sobre-mi.html">Nosotros</a></li>
            <li><a href="centros-educativos.html">Centros</a></li>
          </ul>
        </nav>
        <a href="#contacto" class="btn btn-primary btn-small">Contactar</a>
      </div>
    </header>
  `;

  // Crear el HTML del footer
  const footerHTML = `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="logo">
              <img src="favicon.png" alt="Yoga Kids Club">
              Yoga Kids Club
            </a>
            <p>Movimiento consciente, mindfulness y educación emocional para la infancia.</p>
          </div>
          <div>
            <h4>Navegación</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="servicios.html">Servicios</a></li>
              <li><a href="sobre-mi.html">Sobre YKC</a></li>
              <li><a href="centros-educativos.html">Centros educativos</a></li>
            </ul>
          </div>
          <div>
            <h4>Servicios</h4>
            <ul>
              <li><a href="servicios.html#grupos">Extraescolares 26/27</a></li>
              <li><a href="servicios.html#talleres">Talleres 0-3 años</a></li>
              <li><a href="servicios.html#eventos">Eventos en familia</a></li>
              <li><a href="centros-educativos.html">Proyectos escolares</a></li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li>📍 Granollers y Vallès Oriental</li>
              <li><a href="mailto:sandra.castejon.fanlo@gmail.com">✉️ sandra.castejon.fanlo@gmail.com</a></li>
              <li><a href="https://wa.me/34637188347">📲 637 188 347</a></li>
              <li><a href="https://www.instagram.com/yogakids_club/" target="_blank">📸 Instagram @yogakids_club</a></li>
              <li><a href="https://www.youtube.com/@yogakids_club" target="_blank">▶️ YouTube @yogakids_club</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 Yoga Kids Club. Todos los derechos reservados.</span>
          <div class="legal-links">
            <a href="#">Política de Privacidad</a>
            <a href="#">Aviso Legal</a>
            <a href="#">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  // Inyectar header al inicio del body
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  // Inyectar footer al final del body
  document.body.insertAdjacentHTML('beforeend', footerHTML);
});
