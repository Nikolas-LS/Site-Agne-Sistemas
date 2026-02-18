<template>
  <section id="about" class="relative w-full min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#080808] overflow-hidden transition-colors duration-300 py-20 lg:py-0">
    
    <div class="absolute inset-0 opacity-10 dark:opacity-30 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center bg-fixed pointer-events-none transition-opacity duration-300"></div>
    
    <div class="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-white dark:from-black dark:via-black/90 dark:to-black pointer-events-none transition-colors duration-300"></div>

    <div class="container mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      <div data-aos="fade-right" class="text-center lg:text-left">
        
        <div class="inline-flex items-center space-x-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm transition-colors duration-300 shadow-sm dark:shadow-none">
          <span class="w-2 h-2 rounded-full bg-gray-800 dark:bg-white animate-pulse shadow-sm"></span>
          <span class="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-widest">Quem Somos</span>
        </div>
        
        <h3 class="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 dark:text-white mb-6 leading-tight tracking-tight transition-colors duration-300">
          Tecnologia que <br/> constrói resultados.
        </h3>
        
        <p class="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-8 font-light transition-colors duration-300">
          Há mais de uma década, a AGNE Sistemas dedica-se exclusivamente ao varejo da construção civil. Não somos apenas um software, somos especialistas no seu dia a dia.
        </p>
        
        <div class="border-l-2 border-gray-900 dark:border-white pl-4 sm:pl-6 transition-colors duration-300 mx-auto lg:mx-0 max-w-md lg:max-w-none text-left">
          <p class="text-gray-900 dark:text-white italic text-lg sm:text-xl font-light transition-colors duration-300">
            "Nosso foco é transformar a complexidade fiscal e logística em processos simples e lucrativos."
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 min-[400px]:grid-cols-2 gap-4 md:gap-6 w-full" data-aos="fade-up">
        
        <div class="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:border-gray-300 hover:shadow-xl dark:hover:bg-white/10 dark:hover:border-white/20 transition-all duration-500 group h-auto min-h-[140px] sm:min-h-[160px]">
          <div class="font-light text-gray-900 dark:text-white mb-1 group-hover:text-black dark:group-hover:text-white dark:group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all">
            <span class="text-3xl sm:text-4xl md:text-5xl">+1000</span>
          </div>
          <div class="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs uppercase tracking-widest font-medium group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
            Usuários Utilizando
          </div>
        </div>

        <div class="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:border-gray-300 hover:shadow-xl dark:hover:bg-white/10 dark:hover:border-white/20 transition-all duration-500 group h-auto min-h-[140px] sm:min-h-[160px]">
          <div class="font-light text-gray-900 dark:text-white mb-1 group-hover:text-black dark:group-hover:text-white dark:group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all flex items-baseline justify-center gap-1">
            <span class="text-3xl sm:text-4xl md:text-5xl">+12</span>
            <span class="text-lg md:text-2xl text-gray-500 dark:text-gray-300">Mil</span>
          </div>
          <div class="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs uppercase tracking-widest font-medium group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
            Pedidos Diários
          </div>
        </div>

        <div class="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:border-gray-300 hover:shadow-xl dark:hover:bg-white/10 dark:hover:border-white/20 transition-all duration-500 group h-auto min-h-[140px] sm:min-h-[160px]">
          <div class="font-light text-gray-900 dark:text-white mb-1 group-hover:text-black dark:group-hover:text-white dark:group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all flex items-baseline justify-center gap-1">
            <span class="text-3xl sm:text-4xl md:text-5xl">+1</span>
            <span class="text-lg md:text-2xl text-gray-500 dark:text-gray-300">Milhão</span>
          </div>
          <div class="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs uppercase tracking-widest font-medium group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
            Notas Emitidas
          </div>
        </div>

        <div class="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 p-5 sm:p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:border-gray-300 hover:shadow-xl dark:hover:bg-white/10 dark:hover:border-white/20 transition-all duration-500 group h-auto min-h-[140px] sm:min-h-[160px]">
          <div class="font-light text-gray-900 dark:text-white mb-1 group-hover:text-black dark:group-hover:text-white dark:group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all flex items-baseline justify-center gap-1">
            <span class="text-3xl sm:text-4xl md:text-5xl">+200</span>
            <span class="text-lg md:text-2xl text-gray-500 dark:text-gray-300">Milhões</span>
          </div>
          <div class="text-gray-500 dark:text-gray-400 text-[10px] md:text-xs uppercase tracking-widest font-medium group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors leading-tight max-w-[150px] mx-auto">
            Reais Processados por Mês
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// Script básico
</script>