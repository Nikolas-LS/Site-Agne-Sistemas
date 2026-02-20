# Site - AGNE Sistemas (v2)

Repositório oficial do Front-end do novo site da AGNE Sistemas (v2). Este projeto foi desenvolvido para ser rápido, responsivo e otimizado para SEO, utilizando a geração de site estático (SSG).

---

## Tecnologias Utilizadas

* **Framework:** [Nuxt 3](https://nuxt.com/) (baseado em Vue.js 3)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/) + SASS/SCSS
* **Animações:** [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
* **Tipografia:** Google Fonts (Inter e Roboto)
* **Formulário de Contato:** [EmailJS](https://www.emailjs.com/) (Envio direto do client-side sem backend)

---

## Pré-requisitos (Configurando a Máquina)

Para rodar e editar este projeto em uma nova máquina de desenvolvimento, você precisará instalar as seguintes ferramentas:

1. **[Node.js](https://nodejs.org/)** (Versão 18 ou superior) - *Necessário para rodar o Nuxt e gerenciar pacotes.*
2. **[Git](https://git-scm.com/)** - *Para controle de versão e clonagem do repositório.*
3. **[Visual Studio Code (VS Code)](https://code.visualstudio.com/)** - *Editor de código recomendado.*
4. **[FileZilla](https://filezilla-project.org/)** - *Cliente FTP para envio dos arquivos para o servidor de produção.*

---

## Como Instalar e Rodar Localmente

Siga os passos abaixo para baixar o projeto do GitHub da AGNE e rodá-lo na sua máquina:

**1. Clone o repositório:**
Abra o terminal e execute:
```bash
git clone [https://github.com/agne-dev/site-agne-v2.git](https://github.com/agne-dev/site-agne-v2.git)
```

**2. Acesse a pasta do projeto:**
```bash
cd site-agne-v2
```

**3. Instale as dependências:**
Isso fará o download da pasta `node_modules` baseada no arquivo `package.json`.
```bash
npm install
```

**4. Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```
> O site estará rodando em `http://localhost:3000`. Qualquer alteração salva no código atualizará o navegador instantaneamente.

---

## Configuração do Formulário (EmailJS)

O formulário de contato está configurado para usar o EmailJS. Para que o envio funcione corretamente no ambiente de produção, siga estes passos:

### 1. Configurando o Código (Front-end)

1. Acesse o arquivo `components/HeroSection.vue` (ou onde o script do formulário estiver localizado).
2. Localize a função `submitForm`.
3. Substitua as chaves de marcação pelos IDs reais da conta da AGNE:
   * `SERVICE_ID`
   * `TEMPLATE_ID`
   * `PUBLIC_KEY`

### 2. Configurando o Código (Front-end)

Como a AGNE utiliza a Locaweb para o serviço de e-mails corporativos, o serviço de disparo deve ser configurado no painel do EmailJS adicionando um Custom SMTP. Os dados padrão para preenchimento costumam ser:

* **Host / Servidor SMTP:** email-ssl.com.br ou mail.seudominio.com.br
* **Porta:** 465 (SSL) ou 587 (TLS)
* **Usuário:** E-mail completo (ex: contato@agnesistemas.com.br)
* **Senha:** Senha da conta de e-mail

---

## Como Fazer o Deploy (Lançar para Produção)

Este projeto não utiliza integração contínua (CI/CD) com o GitHub Pages. A hospedagem é feita em um servidor tradicional (cPanel/Apache). 

Sempre que finalizar suas alterações e quiser atualizar o site no ar, siga este roteiro:

### 1. Gere os arquivos estáticos
No terminal do VS Code, pare o servidor local (`CTRL + C`) e execute:
```bash
npm run generate
```
*O Nuxt compilará todo o projeto e criará uma pasta oculta chamada `.output`.*

### 2. Localize a pasta de distribuição
**ATENÇÃO:** Você **NÃO** deve enviar o projeto inteiro para o servidor. 
Os únicos arquivos que vão para a produção estão **dentro** deste caminho:
`/.output/public/`

### 3. Envie via FileZilla (FTP)
1. Abra o FileZilla e conecte-se ao servidor da AGNE Sistemas.
2. Navegue até a pasta raiz pública do site (geralmente `public_html` ou `www`).
3. **Recomendado:** Faça um backup dos arquivos antigos e apague-os para evitar conflitos.
4. Arraste **todo o conteúdo** da sua pasta local `.output/public/` para dentro da `public_html` do servidor.

### 4. Roteamento Apache (.htaccess)
Para evitar erros 404 ao atualizar a página (F5) no servidor de produção, certifique-se de que o arquivo `.htaccess` foi enviado para a raiz da `public_html` com as regras de reescrita padrão.