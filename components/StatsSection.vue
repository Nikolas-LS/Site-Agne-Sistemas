<template>
  <section id="about" class="relative w-full h-screen bg-[#080808] flex items-center justify-center overflow-hidden">
    
    <div class="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center bg-fixed pointer-events-none"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <div data-aos="fade-right">
        <div class="inline-flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-6 backdrop-blur-sm">
          <span class="w-2.5 h-2.5 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
          <span class="text-sm font-medium text-gray-300 uppercase tracking-widest">Quem Somos</span>
        </div>
        
        <h3 class="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight tracking-tight">
          Tecnologia que <br/> constrói resultados.
        </h3>
        
        <p class="text-gray-400 text-lg leading-relaxed mb-8 font-light">
          Há mais de uma década, a AGNE Sistemas dedica-se exclusivamente ao varejo da construção civil. Não somos apenas um software, somos especialistas no seu dia a dia.
        </p>
        
        <div class="border-l-2 border-white pl-6">
          <p class="text-white italic text-xl font-light">
            "Nosso foco é transformar a complexidade fiscal e logística em processos simples e lucrativos."
          </p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 md:gap-6" data-aos="fade-up">
        
        <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500 group h-full min-h-[160px]">
          <div class="font-light text-white mb-2 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all">
            <span class="text-3xl md:text-5xl">+1000</span>
          </div>
          <div class="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest font-medium group-hover:text-gray-200 transition-colors">
            Usuários Utilizando
          </div>
        </div>

        <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500 group h-full min-h-[160px]">
          <div class="font-light text-white mb-2 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all flex items-baseline justify-center gap-1">
            <span class="text-3xl md:text-5xl">+12</span>
            <span class="text-lg md:text-2xl text-gray-300">Mil</span>
          </div>
          <div class="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest font-medium group-hover:text-gray-200 transition-colors">
            Pedidos Diários
          </div>
        </div>

        <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500 group h-full min-h-[160px]">
          <div class="font-light text-white mb-2 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all flex items-baseline justify-center gap-1">
            <span class="text-3xl md:text-5xl">+1</span>
            <span class="text-lg md:text-2xl text-gray-300">Milhão</span>
          </div>
          <div class="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest font-medium group-hover:text-gray-200 transition-colors">
            Notas Emitidas
          </div>
        </div>

        <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500 group h-full min-h-[160px]">
          <div class="font-light text-white mb-2 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] transition-all flex items-baseline justify-center gap-1">
            <span class="text-3xl md:text-5xl">+200</span>
            <span class="text-lg md:text-2xl text-gray-300">Milhões</span>
          </div>
          <div class="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest font-medium group-hover:text-gray-200 transition-colors leading-tight max-w-[150px] mx-auto">
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