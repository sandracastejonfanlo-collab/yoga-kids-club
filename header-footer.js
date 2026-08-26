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
            <a href="index.html" class="font-title text-2xl sm:text-3xl tracking-wide transition-colors" style="font-weight: 800; color: #ce7e67;" onmouseover="this.style.color='#b46f5b'" onmouseout="this.style.color='#ce7e67'">
              Yoga Kids Club
            </a>
          </div>
          
          <!-- Navegación Desktop -->
          <nav class="hidden md:flex space-x-8" style="font-weight: 500; color: #4a3b3f;">
            <a href="index.html" class="transition-colors py-1 border-b-2 border-transparent" onmouseover="this.style.color='#ce7e67';this.style.borderColor='#ce7e67'" onmouseout="this.style.color='#4a3b3f';this.style.borderColor='transparent'">Inicio</a>
            <a href="index.html#metodologia" class="transition-colors py-1 border-b-2 border-transparent" onmouseover="this.style.color='#ce7e67';this.style.borderColor='#ce7e67'" onmouseout="this.style.color='#4a3b3f';this.style.borderColor='transparent'">Metodología</a>
            <a href="servicios.html" class="transition-colors py-1 border-b-2 border-transparent" onmouseover="this.style.color='#ce7e67';this.style.borderColor='#ce7e67'" onmouseout="this.style.color='#4a3b3f';this.style.borderColor='transparent'">Clases</a>
            <a href="sobre-mi.html" class="transition-colors py-1 border-b-2 border-transparent" onmouseover="this.style.color='#ce7e67';this.style.borderColor='#ce7e67'" onmouseout="this.style.color='#4a3b3f';this.style.borderColor='transparent'">Nosotros</a>
            <a href="centros-educativos.html" class="transition-colors py-1 border-b-2 border-transparent" onmouseover="this.style.color='#ce7e67';this.style.borderColor='#ce7e67'" onmouseout="this.style.color='#4a3b3f';this.style.borderColor='transparent'">Centros</a>
          </nav>
          
          <!-- Botón CTA -->
          <a href="#contacto" class="hidden md:inline-block px-6 py-2 rounded-full transition-colors" style="background: #ce7e67; color: #fff; font-weight: 700;" onmouseover="this.style.background='#b46f5b'" onmouseout="this.style.background='#ce7e67'">
            Contactar
          </a>
          
          <!-- Menú Mobile (placeholder) -->
          <button class="md:hidden p-2 rounded-lg hover:bg-gray-100" style="color: #ce7e67;">
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
    <footer class="mt-auto" style="background: #d4b5e0; color: #4a3b3f;">
      <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-16">

        <!-- Brand centrada arriba -->
        <div class="text-center mb-10">
          <div class="flex items-center justify-center space-x-2 mb-3">
            <span class="text-2xl">🧘‍♀️</span>
            <span class="font-title text-xl" style="font-weight: 700; color: #ce7e67;">Yoga Kids Club</span>
          </div>
          <p class="text-sm max-w-md mx-auto" style="color: #5f4d54;">Movimiento consciente, mindfulness y educación emocional para la infancia.</p>
        </div>

        <!-- 3 columnas siempre en fila, incluso en móvil -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;" class="mb-12">

          <!-- Navegación -->
          <div>
            <h4 class="font-title text-sm sm:text-lg mb-3 sm:mb-4" style="font-weight: 700; color: #ffffff;">Navegación</h4>
            <ul class="space-y-1.5 sm:space-y-2 text-xs sm:text-sm" style="color: #5f4d54;">
              <li><a href="index.html" class="transition-colors" onmouseover="this.style.color='#ce7e67'" onmouseout="this.style.color='#5f4d54'">Home</a></li>
              <li><a href="servicios.html" class="transition-colors" onmouseover="this.style.color='#ce7e67'" onmouseout="this.style.color='#5f4d54'">Servicios</a></li>
              <li><a href="sobre-mi.html" class="transition-colors" onmouseover="this.style.color='#ce7e67'" onmouseout="this.style.color='#5f4d54'">Sobre YKC</a></li>
              <li><a href="centros-educativos.html" class="transition-colors" onmouseover="this.style.color='#ce7e67'" onmouseout="this.style.color='#5f4d54'">Centros educativos</a></li>
            </ul>
          </div>

          <!-- Servicios -->
          <div>
            <h4 class="font-title text-sm sm:text-lg mb-3 sm:mb-4" style="font-weight: 700; color: #ffffff;">Servicios</h4>
            <ul class="space-y-1.5 sm:space-y-2 text-xs sm:text-sm" style="color: #5f4d54;">
              <li><a href="servicios.html#grupos" class="transition-colors" onmouseover="this.style.color='#ce7e67'" onmouseout="this.style.color='#5f4d54'">Extraescolares 26/27</a></li>
              <li><a href="servicios.html#talleres" class="transition-colors" onmouseover="this.style.color='#ce7e67'" onmouseout="this.style.color='#5f4d54'">Talleres 0-3 años</a></li>
              <li><a href="servicios.html#eventos" class="transition-colors" onmouseover="this.style.color='#ce7e67'" onmouseout="this.style.color='#5f4d54'">Eventos en familia</a></li>
              <li><a href="centros-educativos.html" class="transition-colors" onmouseover="this.style.color='#ce7e67'" onmouseout="this.style.color='#5f4d54'">Proyectos escolares</a></li>
            </ul>
          </div>

          <!-- Contacto -->
          <div>
            <h4 class="font-title text-sm sm:text-lg mb-3 sm:mb-4" style="font-weight: 700; color: #ffffff;">Contacto</h4>
            <ul class="space-y-1.5 sm:space-y-2 text-xs sm:text-sm" style="color: #5f4d54;">
              <li>📍 Granollers y Vallès Oriental</li>
              <li><a href="mailto:sandra.castejon.fanlo@gmail.com" class="transition-colors" onmouseover="this.style.color='#ce7e67'" onmouseout="this.style.color='#5f4d54'">✉️ sandra.castejon.fanlo@gmail.com</a></li>
              <li><a href="https://wa.me/34637188347" class="transition-colors" onmouseover="this.style.color='#ce7e67'" onmouseout="this.style.color='#5f4d54'">📲 637 188 347</a></li>
              <li><a href="https://www.instagram.com/yogakids_club/" target="_blank" class="transition-colors" onmouseover="this.style.color='#ce7e67'" onmouseout="this.style.color='#5f4d54'">📸 Instagram @yogakids_club</a></li>
              <li><a href="https://www.youtube.com/@yogakids_club" target="_blank" class="transition-colors" onmouseover="this.style.color='#ce7e67'" onmouseout="this.style.color='#5f4d54'">▶️ YouTube @yogakids_club</a></li>
            </ul>
          </div>
        </div>

        <!-- Bottom -->
        <div class="pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4" style="border-top: 1px solid #c19bd0;">
          <span class="text-xs sm:text-sm text-center" style="color: #5f4d54;">© 2026 Yoga Kids Club. Todos los derechos reservados.</span>
          <div class="flex gap-4 sm:gap-6 text-xs sm:text-sm" style="color: #5f4d54;">
            <a href="#" class="transition-colors" onmouseover="this.style.color='#ce7e67'" onmouseout="this.style.color='#5f4d54'">Política de Privacidad</a>
            <a href="#" class="transition-colors" onmouseover="this.style.color='#ce7e67'" onmouseout="this.style.color='#5f4d54'">Aviso Legal</a>
            <a href="#" class="transition-colors" onmouseover="this.style.color='#ce7e67'" onmouseout="this.style.color='#5f4d54'">Política de Cookies</a>
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
