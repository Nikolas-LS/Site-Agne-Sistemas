// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // Gera site estático (Essencial para GitHub Pages)
  ssr: false,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // Fontes Profissionais (Nada arredondado)
  googleFonts: {
    families: {
      'Inter': [300, 400, 600, 700], // Texto padrão
      'Roboto': [400, 500, 700]      // Títulos técnicos
    },
    display: 'swap'
  },

  css: [
    '~/assets/css/main.scss', // Nosso estilo global (caminho relativo)
    'aos/dist/aos.css'        // Estilo das animações
  ],

  app: {
    // IMPORTANTE: Se o nome do seu repositório no GitHub for diferente, mude aqui!
    // Exemplo: se for 'site-agne', coloque '/site-agne/'
    baseURL: '/Site-Agne-Sistemas/'
  }
})