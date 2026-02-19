<template>
  <section id="hero" class="relative w-full min-h-screen lg:h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
    
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/30 z-10"></div>
      <img 
        src="/home_fundo.jpeg" 
        alt="Fundo Tech Construção" 
        class="w-full h-full object-cover opacity-60" 
      />
    </div>

    <div class="container mx-auto px-4 sm:px-6 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full w-full py-24 lg:py-0">
      
      <div class="text-center lg:text-left space-y-6" data-aos="fade-right">
        <span class="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-[10px] sm:text-xs font-medium tracking-widest uppercase backdrop-blur-md">
          Especialistas em Construção
        </span>
        
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-white drop-shadow-lg">
          Agilize a Gestão com <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Inovação e Controle
          </span>
        </h1>
        
        <p class="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 font-light drop-shadow-md">
          Aumente seu faturamento organizando seus processos com o sistema especializado em Lojas de Materiais para Construção.
        </p>

        <div class="flex flex-col md:flex-row items-center justify-center lg:justify-start pt-2 sm:pt-4">
          <button
            @click="videoOpen = true"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
            @touchstart.passive="handleMouseEnter"
            @touchend.passive="handleMouseLeave"
            :class="['video flex items-center justify-center py-2 cursor-pointer group bg-transparent border-none outline-none focus:outline-none', { 'is-hovered': isHovered, 'is-leaving': isLeaving }]"
          >
            <div class="playBtn flex items-center space-x-3 sm:space-x-4">
              <svg class="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0" viewBox="0 0 213.7 213.7" xmlns="http://www.w3.org/2000/svg">
                <circle cx="106.8" cy="106.8" r="103.3" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="circle opacity-80 group-hover:opacity-100 transition-opacity"></circle>
                <polygon points="73.5,62.5 148.5,105.8 73.5,149.1" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="triangle"></polygon>
              </svg>
              <div class="text-left">
                 <p class="subheading text-white font-medium text-sm sm:text-base m-0 tracking-wide group-hover:text-gray-300 transition-colors">
                  Assista o vídeo
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div id="form-area" class="w-full max-w-lg mx-auto lg:ml-auto bg-white/95 dark:bg-black/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-5 sm:p-8 md:p-10 rounded-2xl shadow-2xl relative transition-colors duration-300" data-aos="fade-left">
        <h3 class="text-xl md:text-3xl font-medium text-gray-900 dark:text-white mb-2 tracking-tight">Fale com a AGNE</h3>
        <p class="text-gray-600 dark:text-gray-300 text-xs md:text-sm mb-4 sm:mb-6 font-light">Preencha os campos abaixo para receber nosso contato.</p>

        <form @submit.prevent="submitForm" class="space-y-4 sm:space-y-6">
          
          <div>
            <label class="block text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase mb-1 sm:mb-2 tracking-widest">Nome Completo</label>
            <input 
              v-model="form.name"
              @blur="validateName"
              type="text" 
              placeholder="Seu nome" 
              class="w-full bg-gray-50 dark:bg-white/5 border rounded p-3 sm:p-4 text-gray-900 dark:text-white focus:outline-none transition-colors text-sm font-light placeholder-gray-400" 
              :class="errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-300 dark:border-white/20 focus:border-black dark:focus:border-white'"
            />
            <span v-if="errors.name" class="text-red-500 text-xs mt-1 block">{{ errors.name }}</span>
          </div>

          <div>
            <div class="flex justify-between">
              <label class="block text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase mb-1 sm:mb-2 tracking-widest">Nome da Loja</label>
              <span class="text-[10px] text-gray-400 italic">Opcional</span>
            </div>
            <input 
              v-model="form.store"
              type="text" 
              placeholder="Nome da sua empresa" 
              class="w-full bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded p-3 sm:p-4 text-gray-900 dark:text-white focus:border-black dark:focus:border-white focus:bg-white dark:focus:bg-white/10 focus:outline-none transition-colors text-sm font-light placeholder-gray-400" 
            />
          </div>

          <div>
            <label class="block text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase mb-1 sm:mb-2 tracking-widest">E-mail Corporativo</label>
            <input 
              v-model="form.email"
              @blur="validateEmail"
              type="email" 
              placeholder="seu@email.com" 
              class="w-full bg-gray-50 dark:bg-white/5 border rounded p-3 sm:p-4 text-gray-900 dark:text-white focus:outline-none transition-colors text-sm font-light placeholder-gray-400" 
              :class="errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 dark:border-white/20 focus:border-black dark:focus:border-white'"
            />
            <span v-if="errors.email" class="text-red-500 text-xs mt-1 block">{{ errors.email }}</span>
          </div>

          <div>
            <label class="block text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase mb-1 sm:mb-2 tracking-widest">Número de Contato</label>
            <input 
              :value="form.phone"
              @input="handlePhoneInput"
              @blur="validatePhone"
              type="tel" 
              placeholder="(00) 00000-0000" 
              class="w-full bg-gray-50 dark:bg-white/5 border rounded p-3 sm:p-4 text-gray-900 dark:text-white focus:outline-none transition-colors text-sm font-light placeholder-gray-400" 
              :class="errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 dark:border-white/20 focus:border-black dark:focus:border-white'"
              maxlength="15"
            />
            <span v-if="errors.phone" class="text-red-500 text-xs mt-1 block">{{ errors.phone }}</span>
          </div>

          <button type="submit" class="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 font-medium py-3 sm:py-4 rounded transition-all transform hover:scale-[1.01] shadow-lg shadow-black/10 dark:shadow-white/10 text-sm md:text-base tracking-widest uppercase mt-2">
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

    <transition
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="showSuccessToast" class="fixed top-24 right-5 z-[60] w-full max-w-sm overflow-hidden bg-white dark:bg-[#121212] rounded-lg shadow-2xl border border-green-500/30">
        <div class="p-4 flex items-start">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          
          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p class="text-sm font-medium text-gray-900 dark:text-white">Solicitação Enviada!</p>
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Recebemos seus dados. Nossa equipe entrará em contato em breve.</p>
          </div>

          <div class="ml-4 flex-shrink-0 flex">
            <button @click="closeToast" class="rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none">
              <span class="sr-only">Fechar</span>
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        <div class="w-full bg-gray-200 dark:bg-gray-700 h-1">
          <div 
            class="bg-green-500 h-1 transition-all duration-100 ease-linear" 
            :style="{ width: toastProgress + '%' }"
          ></div>
        </div>
      </div>
    </transition>

    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block pointer-events-none">
      <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onBeforeUnmount, computed } from 'vue';

const props = defineProps({
  videoSrc: { type: String, default: 'https://www.youtube.com/watch?v=1F13ij64cRE' }
});

// --- ESTADO DO FORMULÁRIO ---
const form = reactive({
  name: '',
  store: '',
  email: '',
  phone: ''
});

const errors = reactive({
  name: '',
  store: '',
  email: '',
  phone: ''
});

// --- CONTROLE DO TOAST (NOTIFICAÇÃO) ---
const showSuccessToast = ref(false);
const toastProgress = ref(100);
let toastInterval = null;
const TOAST_DURATION = 4000; // 4 segundos

const triggerSuccessToast = () => {
  // Reseta estado
  showSuccessToast.value = true;
  toastProgress.value = 100;
  
  // Limpa intervalo anterior se existir
  if (toastInterval) clearInterval(toastInterval);

  // Intervalo para a barra de progresso (atualiza a cada 50ms)
  const step = 50;
  toastInterval = setInterval(() => {
    // Reduz a porcentagem baseado no tempo
    toastProgress.value -= (step / TOAST_DURATION) * 100;
    
    if (toastProgress.value <= 0) {
      closeToast();
    }
  }, step);
};

const closeToast = () => {
  showSuccessToast.value = false;
  if (toastInterval) clearInterval(toastInterval);
};

// --- VALIDAÇÕES ---

const validateName = () => {
  const hasNumber = /\d/.test(form.name);
  if (!form.name) {
    errors.name = 'O nome é obrigatório.';
    return false;
  } else if (form.name.length < 4) {
    errors.name = 'O nome deve ter pelo menos 4 letras.';
    return false;
  } else if (hasNumber) {
    errors.name = 'O nome não pode conter números.';
    return false;
  }
  errors.name = '';
  return true;
};

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.email) {
    errors.email = 'O e-mail é obrigatório.';
    return false;
  } else if (!emailRegex.test(form.email)) {
    errors.email = 'Digite um e-mail válido (ex: nome@empresa.com).';
    return false;
  }
  errors.email = '';
  return true;
};

// MÁSCARA E FORMATAÇÃO DE TELEFONE
const handlePhoneInput = (event) => {
  let input = event.target.value;
  let numbersOnly = input.replace(/\D/g, '');

  if (numbersOnly.length > 11) {
    numbersOnly = numbersOnly.slice(0, 11);
  }

  let formatted = numbersOnly;

  if (numbersOnly.length > 10) {
    formatted = numbersOnly.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
  } else if (numbersOnly.length > 6) {
    formatted = numbersOnly.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3');
  } else if (numbersOnly.length > 2) {
    formatted = numbersOnly.replace(/^(\d\d)(\d{0,5})/, '($1) $2');
  } else if (numbersOnly.length > 0) {
    formatted = numbersOnly.replace(/^(\d*)/, '($1');
  }

  event.target.value = formatted;
  form.phone = formatted;
  
  if (numbersOnly.length >= 10) errors.phone = '';
};

const validatePhone = () => {
  const cleanPhone = form.phone.replace(/\D/g, '');
  if (!cleanPhone) {
    errors.phone = 'O número de contato é obrigatório.';
    return false;
  } else if (cleanPhone.length < 10) {
    errors.phone = 'O número parece incompleto.';
    return false;
  }
  errors.phone = '';
  return true;
};

// --- ENVIO DO FORMULÁRIO ---
const submitForm = () => {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();

  if (isNameValid && isEmailValid && isPhoneValid) {
    // 1. Logica de envio (simulada)
    console.log('Enviando dados:', form);

    // 2. Dispara a Notificação (Toast)
    triggerSuccessToast();

    // 3. Limpa o Formulário
    form.name = '';
    form.store = '';
    form.email = '';
    form.phone = '';
    
    // Limpa erros visuais que possam ter sobrado
    errors.name = '';
    errors.store = '';
    errors.email = '';
    errors.phone = '';

  } else {
    // Se quiser alertar erro, pode descomentar:
    // alert('Por favor, verifique os campos em vermelho.');
  }
};


// --- VÍDEO ---
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
  if (toastInterval) clearInterval(toastInterval);
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