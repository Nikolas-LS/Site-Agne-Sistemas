<template>
  <header 
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent"
    :class="isScrolled ? 'bg-black/90 backdrop-blur-md border-white/10 py-3' : 'bg-transparent py-6'"
  >
    <div class="container mx-auto px-6 flex justify-between items-center relative">
      
      <div class="z-50">
        <a href="#hero" class="block">
          <img 
            src="/logobranco.png" 
            alt="AGNE Sistemas" 
            class="h-16 w-auto object-contain transition-transform hover:scale-105"
          />
        </a>
      </div>

      <nav class="hidden lg:flex items-center space-x-8">
        <a v-for="link in links" :key="link.text" :href="link.href" 
           class="text-xs uppercase tracking-widest font-medium text-gray-400 hover:text-white transition-colors relative group">
          {{ link.text }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        
        <a href="#contact" class="bg-white text-black px-6 py-2 rounded text-xs font-medium uppercase tracking-widest hover:bg-gray-200 transition transform hover:scale-105 shadow-lg shadow-white/10">
          Fale Conosco
        </a>
      </nav>

      <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden z-50 text-white focus:outline-none w-10 h-10 flex items-center justify-center relative">
        <div class="w-6 h-5 relative flex flex-col justify-between">
          <span class="w-full h-0.5 bg-white rounded transition-all duration-300 transform origin-left"
                :class="{ 'rotate-45 translate-x-px': mobileMenuOpen }"></span>
          <span class="w-full h-0.5 bg-white rounded transition-all duration-300"
                :class="{ 'opacity-0 translate-x-2': mobileMenuOpen }"></span>
          <span class="w-full h-0.5 bg-white rounded transition-all duration-300 transform origin-left"
                :class="{ '-rotate-45 translate-x-px': mobileMenuOpen }"></span>
        </div>
      </button>

    </div>

    <teleport to="body">
      <!-- overlay: bloqueia interação com o conteúdo enquanto o menu está aberto -->
      <transition name="fade">
        <div
          v-if="mobileMenuOpen"
          class="fixed inset-0 z-40 bg-black/60 lg:hidden"
          @click="mobileMenuOpen = false"
          aria-hidden="true"
        ></div>
      </transition>

      <!-- painel lateral (teleported para body para evitar clipping causado por filtros/transform no header) -->
      <transition
        enter-active-class="transition-transform duration-300 ease-out"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-200 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <aside
          v-if="mobileMenuOpen"
          class="lg:hidden fixed inset-y-0 left-0 z-50 w-72 max-w-[85%] bg-black/95 backdrop-blur-md shadow-2xl p-6 flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          <div class="flex items-center mb-6">
            <a href="#hero" @click="mobileMenuOpen = false" class="inline-block">
              <img src="/logobranco.png" alt="AGNE" class="h-12 w-auto" />
            </a>
          </div>

          <nav class="flex-1 overflow-auto">
            <ul class="space-y-2">
              <li v-for="link in links" :key="link.text">
                <a
                  :href="link.href"
                  @click="mobileMenuOpen = false"
                  class="flex items-center w-full text-left text-gray-300 hover:text-white hover:bg-white/5 rounded-md py-3 px-3 transition"
                >
                  <span class="mr-4 text-gray-300" v-html="icons[link.icon]"></span>
                  <span class="uppercase tracking-widest text-sm font-medium">{{ link.text }}</span>
                </a>
              </li>
            </ul>
          </nav>

          <div class="mt-6">
            <a href="#contact" @click="mobileMenuOpen = false" class="w-full inline-flex items-center justify-center gap-3 bg-white text-black py-3 px-4 rounded font-medium uppercase tracking-widest text-sm shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10v6a2 2 0 0 1-2 2h-7l-4 2v-2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Fale Conosco
            </a>
          </div>
        </aside>
      </transition>
    </teleport>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

// menu items (mesmo conjunto do desktop) — agora com referência de ícone para o mobile
const links = [
  { text: 'Início', href: '#hero', icon: 'home' },
  { text: 'Quem Somos', href: '#about', icon: 'info' },
  { text: 'Produtos', href: '#products', icon: 'box' },
  { text: 'Recursos', href: '#resources', icon: 'resources' },
  { text: 'Parceria', href: '#partnership', icon: 'users' },
];

// pequenos SVGs usados apenas no menu lateral mobile (esquerda dos itens)
const icons = {
  home: '<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z"></path></svg>',
  info: '<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8h.01"/><path d="M11 12h1v4h1"/></svg>',
  box: '<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="11" rx="2"/><path d="M7 7v11"/><path d="M17 7v11"/></svg>',
  resources: '<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20"/><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H20"/><path d="M4 12h16"/></svg>',
  users: '<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

// quando o menu móvel abrir, bloqueia a rolagem do body e torna o <main> inerte/aria-hidden
watch(mobileMenuOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : '';
  document.body.classList.toggle('menu-open', !!val);
  const mainEl = document.querySelector('main');
  if (mainEl) {
    if (val) {
      mainEl.setAttribute('aria-hidden', 'true');
      mainEl.setAttribute('inert', '');
      mainEl.style.pointerEvents = 'none';
      mainEl.style.userSelect = 'none';
    } else {
      mainEl.removeAttribute('aria-hidden');
      mainEl.removeAttribute('inert');
      mainEl.style.pointerEvents = '';
      mainEl.style.userSelect = '';
    }
  }
});

const onKeyDown = (e) => {
  if (e.key === 'Escape') mobileMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('keydown', onKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('keydown', onKeyDown);
  document.body.style.overflow = '';
  document.body.classList.remove('menu-open');
  const mainEl = document.querySelector('main');
  if (mainEl) {
    mainEl.removeAttribute('aria-hidden');
    mainEl.removeAttribute('inert');
    mainEl.style.pointerEvents = '';
    mainEl.style.userSelect = '';
  }
});
</script>