# Agne Sistemas — Landing Page (proposta)

**Landing page estática pronta para apresentação comercial.** Projeto criado com Nuxt 4 e otimizado para publicação em GitHub Pages.

---

## 🔗 Demo ao vivo
- URL pública: https://Nikolas-LS.github.io/Site-Agne-Sistemas/ ✅

## 🧭 Sobre o projeto
Site de apresentação/serviços para a Agne Sistemas — inclui seções de produtos, parceiros, recursos e contato. Ideal para mostrar a proposta visual e fluxo de navegação ao cliente.

## 🚀 Status
- Build: concluído
- Deploy: publicado em `gh-pages` via GitHub Actions

---

## ▶️ Executar localmente
```bash
# instalar dependências
npm ci

# rodar em desenvolvimento (localhost:3000)
npm run dev

# gerar site estático (para deploy)
npm run generate

# pré-visualizar build de produção
npm run preview
```

## 📦 Deploy
- Automático: configurado com GitHub Actions (gera e publica em `gh-pages`).
- Manual (rápido): `npx gh-pages -d dist -r https://github.com/Nikolas-LS/Site-Agne-Sistemas.git`

---

## 🗂️ Estrutura principal
- `app.vue` — layout principal
- `nuxt.config.ts` — configuração do Nuxt (baseURL, módulos)
- `components/` — seções reutilizáveis (Hero, Produtos, Footer…)
- `assets/css/main.scss` — estilos globais

---

## 🛠️ Tecnologias
- Nuxt 4 + Vite
- Tailwind CSS, Sass
- AOS (animações), Swiper (carrossel)
- Deploy via GitHub Pages (Actions)

---

## Próximos passos sugeridos
- Ajustar textos e CTAs para o público-alvo
- Adicionar formulário de contato funcional (EmailJS já instalado)
- Configurar domínio personalizado (opcional)

---