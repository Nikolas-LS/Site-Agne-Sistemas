import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    nuxtApp.hook('app:mounted', () => {
      AOS.init({
        duration: 1000, // Duração da animação (1 segundo)
        once: true,     // Anima apenas na primeira vez que aparece
        offset: 50,     // Começa a animar um pouco antes de aparecer
      })
    })
  }
})