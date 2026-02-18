<script setup>
import { onMounted } from 'vue';

// Lógica para iniciar o tema
onMounted(() => {
  // Verifica se já tem preferência salva ou se o sistema é dark
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
  <div class="bg-black min-h-screen text-white antialiased selection:bg-orange-500 selection:text-white">
    <TheHeader />

    <main>
      <HeroSection />     
      <StatsSection />    
      <Products />
      <Resources />     
      <Partnership />     
    </main>
    
    <TheFooter />       
  </div>
</template>