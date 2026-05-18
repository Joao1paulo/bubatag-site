# 🐃 Bubatag - Landing Page

> Conectando Tradição e Inovação no Vale do Ribeira.

A landing page oficial do **Bubatag**, um sistema inovador focado em criadores de búfalos. O projeto apresenta uma solução tecnológica focada em IoT que utiliza tags inteligentes na orelha dos animais para rastrear localização em tempo real, monitorar batimentos cardíacos e analisar níveis de estresse, garantindo a segurança do rebanho e evitando prejuízos com fugas.

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

* **[Next.js](https://nextjs.org/)** - Framework React com App Router.
* **[React](https://reactjs.org/)** - Biblioteca JavaScript para construção da interface.
* **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utilitário para estilização rápida e responsiva.
* **[AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)** - Biblioteca para animações fluidas baseadas no scroll da página.
* **CSS Customizado** - Animações exclusivas (Glow effects, Float, Slide) e fontes personalizadas (*Fonarto* e *Lato*).

## ⚙️ Funcionalidades e UI/UX

* **Design Responsivo:** Layout adaptável para dispositivos móveis, tablets e desktops.
* **Navegação Suave (Smooth Scroll):** Links da navbar direcionam fluidamente para as seções da página.
* **Estética Minimalista e Moderna:** Tema escuro (`#2f3e46`) com detalhes em verde neon (`#06D001`), criando um contraste tecnológico e ligado à natureza.
* **Vídeos e Mídia:** Header com vídeo em background e pitch embutido otimizado.
* **Animações Interativas:** Feedback visual ao passar o mouse em botões, links e containers (efeitos de glow e drop-shadow).

## 📁 Estrutura do Projeto

Abaixo está a estrutura principal dos componentes criados para a Landing Page:

```text
src/
└── app/
    ├── components/
    │   ├── AOSWrapper.js      # Gerenciador global de animações on-scroll
    │   ├── Footer.js          # Rodapé com contatos e endereço
    │   ├── Header.js          # Hero section com vídeo de fundo e tipografia
    │   ├── Navbar.js          # Menu de navegação responsivo
    │   ├── Pitch.js           # Seção com o vídeo de apresentação
    │   ├── Problematica.js    # Explicação do problema no manejo
    │   ├── Sobre.js           # Detalhes sobre o ecossistema Bubatag
    │   └── Solucao.js         # Apresentação do aplicativo e do rastreamento
    ├── globals.css            # Variáveis CSS, fontes e animações base
    ├── layout.js              # Layout raiz do Next.js (com metadados e ícone)
    └── page.js                # Montagem principal da Landing Page

```

## 🛠️ Como executar o projeto localmente

Siga os passos abaixo para rodar a aplicação na sua máquina local:

1. **Clone o repositório:**
```bash
   git clone https://github.com/seu-usuario/bubatag-landing-page.git
```

2. **Acesse a pasta do projeto:**
```bash
   cd bubatag-landing-page
```

3. **Instale as dependências:**
```bash
   npm install
```

4. **Inicie o servidor de desenvolvimento:**
```bash
   npm run dev
```

5. **Acesse no navegador:**
   Abra [http://localhost:3000](http://localhost:3000) para visualizar o projeto rodando.

---

## 👨‍💻 Equipe e Desenvolvimento

Projeto idealizado e desenvolvido como solução acadêmica e tecnológica para o agronegócio do Vale do Ribeira.

- **João Paulo (JotaPe)** — Front-End Dev & UX Designer
- **Cristhian Hatzman Trigo** - Back/Front-End Dev
- **Vinícius de Souza Camargo Costa** - Database Administrator
- **Leonardo de Lima** - Front-End Dev
- **Arthur Fukunaga Fagundes Nepomuceno** - UX Designer

