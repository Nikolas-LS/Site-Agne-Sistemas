<template>
  <section id="partnership" class="relative w-full min-h-screen bg-gray-100 dark:bg-[#050505] flex flex-col justify-center py-16 sm:py-24 overflow-hidden border-t border-gray-200 dark:border-white/5 transition-colors duration-300">  
    <div class="absolute inset-0 z-0 pointer-events-none">
      <img 
        src="/tela_diferpan.png" 
        alt="Fundo Parceria" 
        class="w-full h-full object-cover opacity-10 dark:opacity-40 transition-opacity duration-300" 
      />      
      <div class="absolute inset-0 bg-transparent transition-colors duration-300"></div>     
      <div class="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-gray-200/50 via-transparent to-transparent dark:from-white/10 dark:to-transparent opacity-20 dark:opacity-20 transition-all duration-300"></div>     
      <div class="absolute inset-0 opacity-10 dark:opacity-10" style="background-image: radial-gradient(#000 1px, transparent 1px); background-size: 40px 40px;"></div>
    </div>
    <div class="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col justify-center h-full">      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">        
        <div data-aos="fade-right" class="space-y-6 sm:space-y-8 text-center lg:text-left">          
          <div class="inline-flex items-center space-x-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 backdrop-blur-sm transition-colors duration-300">
            <span class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gray-800 animate-pulse dark:bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
            <span class="text-[10px] sm:text-sm font-medium text-gray-700 dark:text-gray-300 uppercase tracking-widest">Parceria Oficial</span>
          </div>
          <h2 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 dark:text-white leading-tight tracking-tight transition-colors duration-300">
            Sua Loja com <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 dark:from-white dark:via-gray-300 dark:to-gray-500 drop-shadow-xl">
              Prateleira Infinita
            </span>
          </h2>
          <p class="text-gray-800 dark:text-gray-200 text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light max-w-2xl mx-auto lg:mx-0 text-justify md:text-left transition-colors duration-300">
            Potencialize sua loja com a integração definitiva. Conectamos o sistema AGNE diretamente ao estoque da 
            <span class="text-gray-900 dark:text-white font-medium border-gray-400 dark:border-white/20 transition-colors">Diferpan e Difermix</span>: 
            transforme seu balcão em uma <span class="text-gray-900 dark:text-white font-medium border-gray-400 dark:border-white/20 transition-colors">prateleira infinita!</span> 
            Venda milhares de itens sem ocupar espaço físico, gere caixa antes mesmo de comprar a mercadoria e nunca mais perca uma venda.
          </p>
        </div>
        <div class="relative flex justify-center lg:justify-end w-full" data-aos="fade-left">         
          <div class="absolute -top-20 -right-20 w-40 h-40 bg-gray-400 dark:bg-white rounded-full blur-[40px] opacity-10 dark:opacity-5 pointer-events-none transition-colors duration-300"></div>
          <div class="relative bg-[#0a0a0a]/80 dark:bg-[#0a0a0a]/80 backdrop-blur-2xl border border-gray-300/50 dark:border-white/10 rounded-[1.5rem] 
                      p-6 sm:p-12 
                      flex flex-row items-center justify-between 
                      gap-4 sm:gap-10 
                      shadow-2xl shadow-gray-300/50 dark:shadow-white/5 w-full max-w-2xl transition-all duration-300">            
             <div class="flex-1 flex justify-center">
               <img 
                 src="/logo_diferpan.png" 
                 alt="Diferpan" 
                 class="h-8 sm:h-10 md:h-20 lg:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300" 
               />
             </div>
              <div class="w-px h-8 sm:h-16 bg-gray-300 dark:bg-white/10"></div>
              <div class="flex-1 flex justify-center">
                <img 
                  src="/logo_difermix.png" 
                  alt="Difermix" 
                  class="h-8 sm:h-10 md:h-20 lg:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
          </div>
        </div>
       
      </div>
    </div>
  </section>
</template>

<script setup>
</script>