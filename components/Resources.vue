<template>
  <section id="resources" class="relative w-full min-h-screen bg-gray-100 dark:bg-[#050505] py-20 sm:py-24 overflow-hidden border-t border-gray-200 dark:border-white/5 transition-colors duration-300">   
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute left-0 top-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gray-300 dark:bg-white rounded-full blur-[100px] sm:blur-[150px] opacity-20 dark:opacity-5 transition-colors duration-300"></div>
      <div class="absolute right-0 bottom-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gray-400 dark:bg-gray-800 rounded-full blur-[100px] sm:blur-[150px] opacity-20 dark:opacity-5 transition-colors duration-300"></div>
    </div>
    <div class="container mx-auto px-4 sm:px-6 relative z-10">    
      <div class="text-center mb-10 sm:mb-16" data-aos="fade-up">
        <div class="inline-flex items-center space-x-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 mb-4 sm:mb-6 backdrop-blur-sm transition-colors duration-300">
          <span class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gray-800 dark:bg-white animate-pulse shadow-sm dark:shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
          <span class="text-[10px] sm:text-sm font-medium text-gray-600 dark:text-gray-300 uppercase tracking-widest">Recursos</span>
        </div>       
        <h2 class="text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight text-gray-900 dark:text-white mb-4 transition-colors duration-300">
          Poder Total para <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500">
            Sua Construção
          </span>
        </h2>
      </div>
      <div class="relative px-0 md:px-12">       
        <button class="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-110 transition-all duration-300 backdrop-blur-md hidden md:flex shadow-md dark:shadow-none">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button class="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-110 transition-all duration-300 backdrop-blur-md hidden md:flex shadow-md dark:shadow-none">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
        <swiper
          :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
          :slides-per-view="1"
          :centered-slides="true"
          :space-between="15"
          :loop="true"
          :autoplay="{ delay: 4000, disableOnInteraction: false }"
          :pagination="{ clickable: true, dynamicBullets: true }"
          :navigation="{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }"
          :breakpoints="{
            '340': { slidesPerView: 1, spaceBetween: 15 },
            '640': { slidesPerView: 1, spaceBetween: 20 },
            '768': { slidesPerView: 2, spaceBetween: 30 },
            '1024': { slidesPerView: 3, spaceBetween: 40 },
          }"
          class="features-swiper pb-12 sm:pb-16 !overflow-visible"
        >
          <swiper-slide v-for="(card, index) in cards" :key="index" class="h-auto py-6 sm:py-10">
            <div class="card-content h-full bg-white dark:bg-[#0f0f0f] border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-500 ease-out group relative overflow-hidden shadow-lg dark:shadow-none">             
              <div class="absolute top-0 right-0 w-32 h-32 bg-gray-200 dark:bg-white rounded-full blur-[80px] opacity-0 group-hover:opacity-20 dark:group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
              <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-gray-900 dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300 shrink-0 icon-container">
                <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="card.iconPath"></path>
                </svg>
              </div>
              <h3 class="text-base sm:text-lg font-medium text-gray-900 dark:text-white uppercase tracking-wide mb-3 sm:mb-4 transition-colors">
                {{ card.title }}
              </h3>
              <div class="text-gray-600 dark:text-gray-400 text-sm font-light leading-relaxed space-y-2 flex-grow transition-colors">
                <template v-if="Array.isArray(card.content)">
                  <ul class="space-y-2">
                    <li v-for="(item, i) in card.content" :key="i" class="flex items-start">
                      <span class="mr-2 mt-1.5 w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 group-hover:bg-black dark:group-hover:bg-white transition-colors shrink-0"></span>
                      {{ item }}
                    </li>
                  </ul>
                </template>
                <template v-else>
                  <p>{{ card.content }}</p>
                </template>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="mt-12 sm:mt-16 text-center max-w-2xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        <p class="text-gray-800 dark:text-gray-200 text-sm sm:text-base font-light leading-relaxed">
        E isso é apenas o começo. Nossa equipe lança 
        <span class="text-gray-900 dark:text-white font-medium border-b border-gray-300 dark:border-white/20 pb-0.5">novas atualizações todos os meses</span>, mantendo sua loja sempre à frente do mercado.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperAutoplay = Autoplay;
const SwiperPagination = Pagination;
const SwiperNavigation = Navigation;

const cards = [
  {
    title: 'Especialização',
    iconPath: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z',
    content: 'Todos os recursos são desenvolvidos para atender o ramo de Materiais de Construção. Equipe de suporte voltada para as suas necessidades com tecnologia de ponta.'
  },
  {
    title: 'Venda Ultra Rápida',
    iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    content: ['Sugestão de Produtos', 'Agilidade no atendimento', 'Cadastro Rápido', 'Combinação de Entregas']
  },
  {
    title: 'Módulo Tintométrico',
    iconPath: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.418a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a16.001 16.001 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42',
    content: ['Fábrica de cores integrada', 'Preço da tinta em tempo real', 'Gestão de estoque de colorantes', 'Atendimento rápido']
  },
  {
    title: 'Integração WhatsApp',
    iconPath: 'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z',
    content: ['Mensagens estratégicas automáticas', 'Envio do Orçamento com PDF', 'Status da Entrega', 'Cadastro de Cliente']
  },
  {
    title: 'Gestão de Rede',
    iconPath: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z',
    content: ['Estoque em tempo real', 'Transferência entre lojas', 'Compras por Loja', 'Logística CD']
  },
  {
    title: 'Lojas Virtuais',
    iconPath: 'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z',
    content: ['Integração com E-Commerce', 'Sincroniza Fotos e Estoque', 'Emissão Fiscal Automática', 'Vendas pelo Site']
  },
  {
    title: 'Compras e Estoque',
    iconPath: 'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z',
    content: ['Controle de Lotes', 'Contagem com loja aberta', 'Sugestão de compra', 'Entrada de Notas por XML']
  },
  {
    title: 'Gestão Financeira',
    iconPath: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    content: ['Contas a Pagar e Receber', 'Controle Bancário', 'Caixa Administrativo', 'Integração Bancária']
  },
  {
    title: 'Títulos a Receber',
    iconPath: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    content: ['Gestão de Crediário', 'Cobrança via Whatsapp', 'Avisos de Inadimplência', 'Renegociação de Dívidas']
  },
  {
    title: 'Calculadora',
    iconPath: 'M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18m2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5d.225.225 0 01.225-.225H15a.225.225 0 01.225.225v1.5a.225.225 0 01-.225.225h-3a.225.225 0 01-.225-.225v-1.5a.225.225 0 01.225-.225z',
    content: ['Produtos para instalação', 'Controle das Perdas', 'Medidas por Área', 'Comprimento e Largura']
  },
  {
    title: 'Integrações',
    iconPath: 'M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244',
    content: ['Whatsapp e E-commerce', 'PIX e TEF', 'Impressora de Etiquetas', 'Sefaz e Bancos']
  },
  {
    title: 'BI - Inteligência',
    iconPath: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6',
    content: ['Indicadores de Faturamento', 'Lucro líquido', 'Resumo por vendedor', 'Gráficos Demonstrativos']
  }
];
</script>

<style scoped>
/* Mobile First (Telas pequenas): Escala muito sutil para não cortar */
.swiper-slide-active .card-content {
  transform: scale(1.02); 
  z-index: 10;
}

/* Telas médias/grandes (md = 768px): Escala maior como era antes */
@media (min-width: 768px) {
  .swiper-slide-active .card-content {
    transform: scale(1.1);
  }
}

/* Light Mode Active */
:global(:root:not(.dark)) .swiper-slide-active .card-content {
  background-color: #ffffff;
  border-color: #9ca3af; 
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 255, 255, 0.5);
}

/* Dark Mode Active */
:global(.dark) .swiper-slide-active .card-content {
  background-color: #000000;
  border-color: #ffffff;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.15);
}

.swiper-slide:not(.swiper-slide-active) .card-content {
  opacity: 0.6;
}

.card-content {
  transform: scale(1);
}

/* Paginação */
:deep(.swiper-pagination-bullet) {
  background: #9ca3af; 
  opacity: 1;
}
:global(.dark) :deep(.swiper-pagination-bullet) {
  background: #333; 
}
:deep(.swiper-pagination-bullet-active) {
  background: #1f2937; 
}
:global(.dark) :deep(.swiper-pagination-bullet-active) {
  background: #fff;
}
</style>