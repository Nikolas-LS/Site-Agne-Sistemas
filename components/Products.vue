<template>
  <section id="products" class="min-h-screen w-full bg-gray-50 dark:bg-[#0a0a0a] py-16 sm:py-20 flex flex-col justify-center relative overflow-hidden transition-colors duration-300">
    <div class="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gray-200 dark:bg-white/5 rounded-full blur-3xl pointer-events-none transition-colors duration-300"></div>
    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center mb-16 sm:mb-24">
        <div class="text-center lg:text-left space-y-4 sm:space-y-6" data-aos="fade-right">
          <div class="inline-flex items-center space-x-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 backdrop-blur-sm transition-colors duration-300">
            <span class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-black dark:bg-white animate-pulse shadow-sm"></span>
            <span class="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-widest">Produtos</span>
          </div>
          <h2 class="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 dark:text-white leading-tight transition-colors duration-300">
            Ecossistema <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500">
              Completo
            </span>
          </h2>          
          <p class="text-gray-600 dark:text-gray-400 font-light text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 transition-colors duration-300">
            Tudo o que sua loja de materiais de construção precisa. Tenha o controle total na palma da sua mão com nosso aplicativo nativo.
          </p>
        </div>
        <div class="relative flex justify-center lg:justify-center perspective-container py-8 lg:py-0" data-aos="fade-left">          
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-64 sm:h-64 bg-gray-300 dark:bg-white/10 rounded-full blur-[60px] sm:blur-[80px] pointer-events-none transition-colors duration-300"></div>
          <div class="phone-mockup group">
            <div class="phone-body">              
              <div class="phone-frame"></div>
              <div class="phone-buttons"></div>              
              <div class="phone-screen relative overflow-hidden bg-black">
                <div class="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-16 sm:h-6 sm:w-20 bg-black rounded-b-xl z-20 flex items-center justify-center gap-2">
                    <div class="w-6 h-0.5 sm:w-8 sm:h-1 bg-gray-800 rounded-full"></div>
                    <div class="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-gray-800 rounded-full"></div>
                </div>
                <img 
                  src="/app_demo.jpg" 
                  alt="App AGNE" 
                  class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div class="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">     
        <div class="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer hover:shadow-xl dark:hover:shadow-white/5">
          <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 dark:bg-white/5 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-black dark:group-hover:bg-white transition-colors duration-300">
            <svg class="w-6 h-6 sm:w-8 sm:h-8 text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          <h3 class="text-xs sm:text-sm uppercase tracking-widest font-medium text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors">AGNE Gestão (ERP)</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light transition-colors duration-300">
            Controle total de estoque, financeiro e fiscal. O coração da sua loja batendo no ritmo certo.
          </p>
        </div>
        <div class="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer hover:shadow-xl dark:hover:shadow-white/5">
          <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 dark:bg-white/5 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-black dark:group-hover:bg-white transition-colors duration-300">
            <svg class="w-6 h-6 sm:w-8 sm:h-8 text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
          </div>
          <h3 class="text-xs sm:text-sm uppercase tracking-widest font-medium text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors">Força de Vendas</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light transition-colors duration-300">
            Vendedores ágeis no balcão ou na rua. Emita pedidos pelo celular integrado ao estoque em tempo real.
          </p>
        </div>
        <div class="group p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer hover:shadow-xl dark:hover:shadow-white/5">
          <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 dark:bg-white/5 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-black dark:group-hover:bg-white transition-colors duration-300">
            <svg class="w-6 h-6 sm:w-8 sm:h-8 text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
          </div>
          <h3 class="text-xs sm:text-sm uppercase tracking-widest font-medium text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors">Inteligência (BI)</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light transition-colors duration-300">
            Relatórios gerenciais que mostram onde você ganha dinheiro. Tome decisões baseadas em dados.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.perspective-container {
  perspective: 1000px;
}

/* AJUSTE PARA 340px: Tamanho responsivo do celular */
.phone-mockup {
  width: 200px; 
  height: 380px; 
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s ease-out;
  transform: rotateY(-15deg) rotateX(5deg);
}

/* A partir de 400px, volta ao tamanho original */
@media (min-width: 400px) {
  .phone-mockup {
    width: 230px;
    height: 440px;
  }
}

.phone-mockup:hover {
  transform: rotateY(0deg) rotateX(0deg) translateY(-10px) scale(1.02);
}

.phone-body {
  position: absolute;
  inset: 0;
  background: #1a1a1a;
  border-radius: 30px;
  box-shadow: 
    0 0 0 3px #454545,
    0 20px 50px -10px rgba(0,0,0,0.5);
}

.phone-screen {
  position: absolute;
  inset: 8px;
  border-radius: 25px;
  box-shadow: inset 0 0 20px rgba(0,0,0,0.8);
}

.phone-buttons::before,
.phone-buttons::after {
  content: '';
  position: absolute;
  left: -5px;
  background: #2a2a2a;
  border-radius: 4px 0 0 4px;
}

.phone-buttons::before {
  top: 80px;
  width: 3px;
  height: 25px;
}
.phone-buttons::after {
  top: 120px;
  width: 3px;
  height: 45px;
}
</style>