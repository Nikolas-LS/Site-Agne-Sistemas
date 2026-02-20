/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  // Isso diz ao Tailwind onde procurar suas classes para gerar o CSS
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}