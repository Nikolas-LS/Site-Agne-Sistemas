<template>
  <section id="products" class="min-h-screen w-full bg-[#0a0a0a] py-20 flex flex-col justify-center relative overflow-hidden">
    
    <div class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center mb-24">
        
        <div class="text-center lg:text-left space-y-6" data-aos="fade-right">
          <div class="inline-flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 backdrop-blur-sm">
            <span class="w-2.5 h-2.5 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
            <span class="text-sm font-medium text-gray-300 uppercase tracking-widest">Produtos</span>
          </div>

          <h2 class="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
            Ecossistema <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Completo
            </span>
          </h2>
          
          <p class="text-gray-400 font-light text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Tudo o que sua loja de materiais de construção precisa. Tenha o controle total na palma da sua mão com nosso aplicativo nativo.
          </p>
        </div>

        <div class="relative flex justify-center lg:justify-center perspective-container" data-aos="fade-left">
          
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div class="phone-mockup group">
            <div class="phone-body">
              
              <div class="phone-frame"></div>
              
              <div class="phone-buttons"></div>
              
              <div class="phone-screen relative overflow-hidden bg-black">
                <div class="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-20 bg-black rounded-b-xl z-20 flex items-center justify-center gap-2">
                    <div class="w-8 h-1 bg-gray-800 rounded-full"></div>
                    <div class="w-1 h-1 bg-gray-800 rounded-full"></div>
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

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div class="group p-8 rounded-2xl bg-[#151515] border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer hover:shadow-lg hover:shadow-white/5">
          <div class="w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
            <svg class="w-8 h-8 text-white group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          <h3 class="text-sm uppercase tracking-widest font-medium text-white mb-3 group-hover:text-gray-200 transition-colors">AGNE Gestão (ERP)</h3>
          <p class="text-gray-400 text-sm leading-relaxed font-light">
            Controle total de estoque, financeiro e fiscal. O coração da sua loja batendo no ritmo certo.
          </p>
        </div>

        <div class="group p-8 rounded-2xl bg-[#151515] border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer hover:shadow-lg hover:shadow-white/5">
          <div class="w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
            <svg class="w-8 h-8 text-white group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
          </div>
          <h3 class="text-sm uppercase tracking-widest font-medium text-white mb-3 group-hover:text-gray-200 transition-colors">Força de Vendas</h3>
          <p class="text-gray-400 text-sm leading-relaxed font-light">
            Vendedores ágeis no balcão ou na rua. Emita pedidos pelo celular integrado ao estoque em tempo real.
          </p>
        </div>

        <div class="group p-8 rounded-2xl bg-[#151515] border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 cursor-pointer hover:shadow-lg hover:shadow-white/5">
          <div class="w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
            <svg class="w-8 h-8 text-white group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
          </div>
          <h3 class="text-sm uppercase tracking-widest font-medium text-white mb-3 group-hover:text-gray-200 transition-colors">Inteligência (BI)</h3>
          <p class="text-gray-400 text-sm leading-relaxed font-light">
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

/* AJUSTE AQUI: Diminuí as dimensões do celular */
.phone-mockup {
  width: 230px;  /* Antes: 300px */
  height: 440px; /* Antes: 600px */
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s ease-out;
  transform: rotateY(-15deg) rotateX(5deg);
}

.phone-mockup:hover {
  transform: rotateY(0deg) rotateX(0deg) translateY(-10px) scale(1.02);
}

.phone-body {
  position: absolute;
  inset: 0;
  background: #1a1a1a;
  border-radius: 30px; /* Ajustado para o novo tamanho */
  box-shadow: 
    0 0 0 3px #454545,
    0 20px 50px -10px rgba(0,0,0,0.5);
}

.phone-screen {
  position: absolute;
  inset: 8px; /* Borda mais fina */
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