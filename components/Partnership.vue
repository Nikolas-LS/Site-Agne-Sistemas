<template>
  <section id="partnership" class="relative w-full min-h-screen bg-[#050505] flex flex-col justify-center py-24 overflow-hidden border-t border-white/5">
    
    <div class="absolute inset-0 z-0 pointer-events-none">
      <!-- background image (public/tela_diferpan.jpg) + dark overlay, estilo igual ao Hero -->
      <img src="/tela_diferpan.png" alt="Fundo Parceria" class="w-full h-full object-cover opacity-40" />
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-white/10 to-transparent opacity-20"></div>
      <div class="absolute inset-0" style="background-image: radial-gradient(#555 1px, transparent 1px); background-size: 40px 40px; opacity: 0.12;"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10 flex flex-col justify-center h-full">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div data-aos="fade-right" class="space-y-8">
          
          <div class="inline-flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 backdrop-blur-sm">
            <span class="w-2.5 h-2.5 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
            <span class="text-sm font-medium text-gray-300 uppercase tracking-widest">Parceria Oficial</span>
          </div>

          <h2 class="text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight tracking-tight">
            Sua Loja com <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 drop-shadow-xl">
              Prateleira Infinita
            </span>
          </h2>

          <p class="text-gray-400 text-lg md:text-xl lg:text-2xl leading-relaxed font-light max-w-2xl text-justify md:text-left">
            Potencialize sua loja com a integração definitiva. Conectamos o sistema AGNE diretamente ao estoque da 
            <span class="text-white font-medium border-white/20">Diferpan e Difermix</span>: 
            transforme seu balcão em uma <span class="text-white font-medium border-white/20">prateleira infinita!</span> 
            Venda milhares de itens sem ocupar espaço físico, gere caixa antes mesmo de comprar a mercadoria e nunca mais perca uma venda.
          </p>
        </div>

        <div class="relative flex justify-center lg:justify-end w-full" data-aos="fade-left">
          
          <!-- luz branca suavizada: menor, menos desfocada e mais transparente -->
          <div class="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full blur-[40px] opacity-5 animate-pulse pointer-events-none"></div>

          <div class="relative bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-[1.5rem] 
                      p-6 md:p-12 
                      flex flex-row items-center justify-between 
                      gap-4 md:gap-10 
                      shadow-2xl shadow-white/5 w-full max-w-2xl">
             
             <div class="flex-1 flex justify-center">
               <img 
                 src="/logo_diferpan.png" 
                 alt="Diferpan" 
                 class="h-10 sm:h-14 md:h-20 lg:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300" 
               />
             </div>

              <div class="flex-1 flex justify-center">
                <img 
                  src="/logo_difermix.png" 
                  alt="Difermix" 
                  class="h-10 sm:h-14 md:h-20 lg:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

          </div>
        </div>
        
      </div>

    </div>
  </section>
</template>

<script setup>
// Sem scripts extras
</script>