<template>
  <section id="hero" class="relative w-full min-h-screen lg:h-screen flex items-center justify-center bg-black overflow-hidden">
    
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/30 z-10"></div>
      <img 
        src="/home_fundo.jpeg" 
        alt="Fundo Tech Construção" 
        class="w-full h-full object-cover opacity-60" 
      />
    </div>

    <div class="container mx-auto px-6 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full w-full py-32 lg:py-0">
      
      <div class="text-center lg:text-left space-y-6" data-aos="fade-right">
        
        <span class="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium tracking-widest uppercase backdrop-blur-md">
          Especialistas em Construção
        </span>
        
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-white drop-shadow-lg">
          Agilize a Gestão com <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Inovação e Controle
          </span>
        </h1>
        
        <p class="text-gray-200 text-base md:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 font-light drop-shadow-md">
          Aumente seu faturamento organizando seus processos com o sistema especializado em Lojas de Materiais para Construção.
        </p>

        <div class="flex flex-col md:flex-row items-center justify-center lg:justify-start pt-4">
          <button
            @click="videoOpen = true"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
            @touchstart.passive="handleMouseEnter"
            @touchend.passive="handleMouseLeave"
            :class="['video flex items-center justify-center py-2 cursor-pointer group bg-transparent border-none outline-none focus:outline-none', { 'is-hovered': isHovered, 'is-leaving': isLeaving }]"
          >
            <div class="playBtn flex items-center space-x-4">
              <svg class="w-16 h-16 flex-shrink-0" viewBox="0 0 213.7 213.7" xmlns="http://www.w3.org/2000/svg">
                <circle cx="106.8" cy="106.8" r="103.3" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="circle opacity-80 group-hover:opacity-100 transition-opacity"></circle>
                <polygon points="73.5,62.5 148.5,105.8 73.5,149.1" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="triangle"></polygon>
              </svg>
              <div class="text-left">
                 <p class="subheading text-white font-medium text-base m-0 tracking-wide group-hover:text-gray-300 transition-colors">
                  Assista o vídeo
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div id="form-area" class="w-full max-w-lg mx-auto lg:ml-auto bg-black/60 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl relative" data-aos="fade-left">
        <h3 class="text-xl md:text-3xl font-medium text-white mb-2 tracking-tight">Fale com a AGNE</h3>
        <p class="text-gray-300 text-xs md:text-sm mb-6 font-light">Preencha os campos abaixo para receber nosso contato.</p>

        <form @submit.prevent="submitForm" class="space-y-6">
          
          <div>
            <label class="block text-xs font-medium text-gray-400 uppercase mb-2 tracking-widest">Nome Completo</label>
            <input type="text" placeholder="Seu nome" class="w-full bg-white/5 border border-white/20 rounded p-4 text-white focus:border-white focus:bg-white/10 focus:outline-none transition-colors text-sm font-light placeholder-gray-500" required />
          </div>

          <div>
            <label class="block text-xs font-medium text-gray-400 uppercase mb-2 tracking-widest">Nome da Loja</label>
            <input type="text" placeholder="Nome da sua empresa" class="w-full bg-white/5 border border-white/20 rounded p-4 text-white focus:border-white focus:bg-white/10 focus:outline-none transition-colors text-sm font-light placeholder-gray-500" required />
          </div>

          <div>
            <label class="block text-xs font-medium text-gray-400 uppercase mb-2 tracking-widest">E-mail Corporativo</label>
            <input type="email" placeholder="seu@email.com" class="w-full bg-white/5 border border-white/20 rounded p-4 text-white focus:border-white focus:bg-white/10 focus:outline-none transition-colors text-sm font-light placeholder-gray-500" required />
          </div>

          <div>
            <label class="block text-xs font-medium text-gray-400 uppercase mb-2 tracking-widest">Número de Contato</label>
            <input type="tel" placeholder="(00) 00000-0000" class="w-full bg-white/5 border border-white/20 rounded p-4 text-white focus:border-white focus:bg-white/10 focus:outline-none transition-colors text-sm font-light placeholder-gray-500" required />
          </div>

          <button type="submit" class="w-full bg-white text-black hover:bg-gray-200 font-medium py-4 rounded transition-all transform hover:scale-[1.01] shadow-lg shadow-white/10 text-sm md:text-base tracking-widest uppercase mt-2">
            ENVIAR SOLICITAÇÃO
          </button>

        </form>
      </div>

    </div>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="videoOpen" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
        
        <button @click="videoOpen = false" class="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-50 p-2">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div class="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-800 relative">
          <iframe 
            class="w-full h-full"
            :src="embedUrl"
            title="Vídeo Institucional AGNE"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </transition>

    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block pointer-events-none">
      <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onBeforeUnmount, computed } from 'vue';

const props = defineProps({
  videoSrc: { type: String, default: 'https://www.youtube.com/watch?v=1F13ij64cRE' }
});

const videoOpen = ref(false);
const isHovered = ref(false);
const isLeaving = ref(false);
let leaveTimeout = null;

function handleMouseEnter() {
  if (leaveTimeout) {
    clearTimeout(leaveTimeout);
    leaveTimeout = null;
  }
  isLeaving.value = false;
  isHovered.value = true;
}

function handleMouseLeave() {
  isHovered.value = false;
  isLeaving.value = true;
  leaveTimeout = setTimeout(() => {
    isLeaving.value = false;
    leaveTimeout = null;
  }, 700);
}

onBeforeUnmount(() => {
  if (leaveTimeout) clearTimeout(leaveTimeout);
});

const embedUrl = computed(() => {
  if (!props.videoSrc) return '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = props.videoSrc.match(regExp);
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}?autoplay=1`;
  }
  return props.videoSrc;
});

const submitForm = () => {
  alert('Formulário pronto para envio!');
};
</script>

<style scoped>
.playBtn {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.5s ease;
}

.playBtn .triangle {
  transition: stroke-dashoffset 0.7s ease-in-out, transform 0.7s ease-in-out, fill 0.3s;
  stroke-dasharray: 240;
  stroke-dashoffset: 480;
  transform: translateY(0);
  fill: transparent;
}

.video.is-hovered .playBtn .triangle,
.video:hover .playBtn .triangle {
  stroke-dashoffset: 0;
  transform: translateY(-5px);
  fill: #ffffff;
  stroke: #ffffff;
}

.video.is-leaving .playBtn .triangle {
  stroke-dashoffset: 480;
  transform: translateY(0);
}

.playBtn .circle {
  transition: stroke-dashoffset 0.7s linear, transform 0.7s linear, stroke 0.2s linear, filter 0.2s linear;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  transform-origin: 50% 50%;
  transform: rotate(0deg);
}

.video.is-hovered .playBtn .circle,
.video:hover .playBtn .circle {
  stroke-dashoffset: 0;
  stroke: #ffffff;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.6));
  transform: rotate(-360deg);
}

.video.is-leaving .playBtn .circle {
  stroke-dashoffset: 650;
  stroke: #ffffff;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.2));
  transform: rotate(-720deg);
}
</style>