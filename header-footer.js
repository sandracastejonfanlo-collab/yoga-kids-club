// Inyecta el header y footer en todas las páginas
document.addEventListener('DOMContentLoaded', function() {
  
  // Crear el HTML del header
  const headerHTML = `
    <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          
          <!-- Logo -->
          <div class="flex items-center space-x-2 cursor-pointer">
            <span class="text-3xl">🧘‍♀️</span>
            <a href="index.html" class="font-title text-2xl sm:text-3xl font-bold text-orange-600 tracking-wide hover:text-orange-700 transition-colors">
              Yoga Kids Club
            </a>
          </div>
          
          <!-- Navegación Desktop -->
          <nav class="hidden md:flex space-x-8 font-medium">
            <a href="index.html" class="hover:text-orange-600 transition-colors py-1 border-b-2 border-transparent hover:border-orange-600">Inicio</a>
            <a href="index.html#metodologia" class="hover:text-orange-600 transition-colors py-1 border-b-2 border-transparent hover:border-orange-600">Metodología</a>
            <a href="servicios.html" class="hover:text-orange-600 transition-colors py-1 border-b-2 border-transparent hover:border-orange-600">Clases</a>
            <a href="sobre-mi.html" class="hover:text-orange-600 transition-colors py-1 border-b-2 border-transparent hover:border-orange-600">Nosotros</a>
            <a href="centros-educativos.html" class="hover:text-orange-600 transition-colors py-1 border-b-2 border-transparent hover:border-orange-600">Centros</a>
          </nav>
          
          <!-- Botón CTA -->
          <a href="#contacto" class="hidden md:inline-block px-6 py-2 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors">
            Contactar
          </a>
          
          <!-- Menú Mobile (placeholder) -->
          <button class="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  `;
  
  // Crear el HTML del footer
  const footerHTML = `
    <footer class="bg-gray-900 text-gray-100 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <!-- Brand -->
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <span class="text-2xl">🧘‍♀️</span>
              <span class="font-title text-xl font-bold text-yellow-400">Yoga Kids Club</span>
            </div>
            <p class="text-gray-400 text-sm">Movimiento consciente, mindfulness y educación emocional para la infancia.</p>
          </div>
          
          <!-- Navegación -->
          <div>
            <h4 class="font-title font-bold text-lg text-green-400 mb-4">Navegación</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li><a href="index.html" class="hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="servicios.html" class="hover:text-yellow-400 transition-colors">Servicios</a></li>
              <li><a href="sobre-mi.html" class="hover:text-yellow-400 transition-colors">Sobre YKC</a></li>
              <li><a href="centros-educativos.html" class="hover:text-yellow-400 transition-colors">Centros educativos</a></li>
            </ul>
          </div>
          
          <!-- Servicios -->
          <div>
            <h4 class="font-title font-bold text-lg text-green-400 mb-4">Servicios</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li><a href="servicios.html#grupos" class="hover:text-yellow-400 transition-colors">Extraescolares 26/27</a></li>
              <li><a href="servicios.html#talleres" class="hover:text-yellow-400 transition-colors">Talleres 0-3 años</a></li>
              <li><a href="servicios.html#eventos" class="hover:text-yellow-400 transition-colors">Eventos en familia</a></li>
              <li><a href="centros-educativos.html" class="hover:text-yellow-400 transition-colors">Proyectos escolares</a></li>
            </ul>
          </div>
          
          <!-- Contacto -->
          <div>
            <h4 class="font-title font-bold text-lg text-green-400 mb-4">Contacto</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>📍 Granollers y Vallès Oriental</li>
              <li>✉️ sandra.castejon.fanlo@gmail.com</li>
              <li>📲 637 188 347</li>
              <li><a href="#" class="hover:text-yellow-400 transition-colors">📸 Instagram @yogakids_club</a></li>
              <li><a href="#" class="hover:text-yellow-400 transition-colors">▶️ YouTube @yogakids_club</a></li>
            </ul>
          </div>
        </div>
        
        <!-- Bottom -->
        <div class="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span class="text-gray-400 text-sm">© 2026 Yoga Kids Club. Todos los derechos reservados.</span>
          <div class="flex gap-6 text-gray-400 text-sm">
            <a href="#" class="hover:text-yellow-400 transition-colors">Política de Privacidad</a>
            <a href="#" class="hover:text-yellow-400 transition-colors">Aviso Legal</a>
            <a href="#" class="hover:text-yellow-400 transition-colors">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  `;
  
  // Inyectar header al inicio del body
  if (document.body.firstChild) {
    document.body.insertBefore(
      document.createElement('div').appendChild(
        new DOMParser().parseFromString(headerHTML, 'text/html').body.firstChild
      ).parentNode.removeChild(document.body.firstChild),
      document.body.firstChild
    );
  } else {
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  }
  
  // Inyectar footer al final del body
  document.body.insertAdjacentHTML('beforeend', footerHTML);
});
