<template>
  <header 
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b"
    :class="[
      isScrolled 
        ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md border-gray-200 dark:border-white/10 py-2 sm:py-3 shadow-sm' 
        : 'bg-transparent border-transparent py-4 sm:py-6'
    ]"
  >
    <div class="container mx-auto px-4 sm:px-6 flex justify-between items-center relative">
      
      <div class="z-50">
        <a href="#hero" class="block">
          <img 
            src="/logobranco.png" 
            alt="AGNE Sistemas" 
            class="h-10 sm:h-16 w-auto object-contain transition-transform hover:scale-105"
            :class="isScrolled ? 'invert dark:invert-0' : 'invert-0'"
          />
        </a>
      </div>

      <nav class="hidden lg:flex items-center space-x-8">
        <a v-for="link in links" :key="link.text" :href="link.href" 
           class="text-xs uppercase tracking-widest font-medium transition-colors relative group"
           :class="isScrolled 
             ? 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white' 
             : 'text-white/80 hover:text-white'"
        >
          {{ link.text }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                :class="isScrolled ? 'bg-black dark:bg-white' : 'bg-white'">
          </span>
        </a>
        
        <button 
          @click="toggleTheme" 
          class="p-2 rounded-full transition-colors"
          :class="isScrolled 
            ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10' 
            : 'text-white hover:bg-white/10'"
          :title="isDark ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro'"
        >
          <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        </button>

        <div class="h-6 w-px transition-colors" :class="isScrolled ? 'bg-gray-300 dark:bg-white/20' : 'bg-white/20'"></div>

        <a href="#contact" 
           class="px-6 py-2 rounded text-xs font-medium uppercase tracking-widest transition transform hover:scale-105 shadow-lg"
           :class="isScrolled 
             ? 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 shadow-black/10 dark:shadow-white/10' 
             : 'bg-white text-black hover:bg-gray-200 shadow-white/10'"
        >
          Fale Conosco
        </a>
      </nav>

      <button @click="mobileMenuOpen = true" class="lg:hidden z-50 focus:outline-none p-1 sm:p-2"
        :class="isScrolled ? 'text-black dark:text-white' : 'text-white'"
      >
        <svg class="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

    </div>

    <teleport to="body">
      
      <transition
        enter-active-class="transition-opacity duration-500 ease-in-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-500 ease-in-out"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="mobileMenuOpen"
          class="fixed inset-0 z-[60] bg-black/60 dark:bg-black/80 backdrop-blur-sm lg:hidden"
          @click="mobileMenuOpen = false"
          aria-hidden="true"
        ></div>
      </transition>

      <transition
        enter-active-class="transform transition ease-in-out duration-500"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transform transition ease-in-out duration-500"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <aside
          v-if="mobileMenuOpen"
          class="lg:hidden fixed inset-y-0 right-0 z-[70] w-[85vw] max-w-xs bg-white dark:bg-[#0a0a0a] border-l border-gray-200 dark:border-white/10 shadow-2xl p-5 sm:p-6 flex flex-col h-full overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div class="flex items-center justify-between mb-6 sm:mb-8">
            <img src="/logobranco.png" alt="AGNE" class="h-6 sm:h-8 w-auto invert dark:invert-0 opacity-80" />
            
            <div class="flex items-center gap-2">
              <button 
                @click="toggleTheme" 
                class="p-2 rounded-full text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-white/10"
              >
                <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
              </button>

              <button @click="mobileMenuOpen = false" class="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors p-2">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>

          <nav class="flex-1">
            <ul class="space-y-3 sm:space-y-4">
              <li v-for="link in links" :key="link.text">
                <a
                  :href="link.href"
                  @click="mobileMenuOpen = false"
                  class="group flex items-center gap-4 w-full text-base sm:text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors border-b border-gray-100 dark:border-white/5 pb-2.5 sm:pb-3"
                >
                  <div class="p-2 rounded-lg bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors">
                    <span v-html="link.icon"></span>
                  </div>
                  
                  <span>{{ link.text }}</span>
                </a>
              </li>
            </ul>
          </nav>

          <div class="mt-auto space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t border-gray-200 dark:border-white/10">
            <a href="https://wa.me/555135884111" target="_blank" class="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group">
              <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-gray-700 dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                 <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <span class="block text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">Precisa de Ajuda?</span>
                <span class="block text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Central de Atendimento</span>
              </div>
            </a>

            <a href="#contact" @click="mobileMenuOpen = false" class="block w-full text-center bg-black dark:bg-white text-white dark:text-black py-3 sm:py-4 rounded-xl font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition shadow-lg">
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
const isDark = ref(true); 

const links = [
  { 
    text: 'Início', 
    href: '#hero',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>'
  },
  { 
    text: 'Quem Somos', 
    href: '#about',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
  },
  { 
    text: 'Produtos', 
    href: '#products',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>'
  },
  { 
    text: 'Recursos', 
    href: '#resources',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>'
  },
  { 
    text: 'Parceria', 
    href: '#partnership',
    icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>'
  },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
};

watch(mobileMenuOpen, (val) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = val ? 'hidden' : '';
  }
});

const onKeyDown = (e) => {
  if (e.key === 'Escape') mobileMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('keydown', onKeyDown);

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true;
    document.documentElement.classList.add('dark');
  } else {
    isDark.value = false;
    document.documentElement.classList.remove('dark');
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('keydown', onKeyDown);
  if (typeof document !== 'undefined') {
    document.body.style.overflow = '';
  }
});
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>