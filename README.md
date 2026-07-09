# Movies Lib

Movies Lib é uma aplicação web desenvolvida em React com o objetivo de praticar conceitos de componentes, rotas, consumo de API, CSS e responsividade.

O projeto exibe uma lista de filmes bem avaliados, permite buscar filmes pelo nome e visualizar detalhes como avaliação, orçamento, receita, duração e descrição.

## Objetivo do projeto

Este projeto foi desenvolvido com base em estudos de React, com o intuito de praticar:

- criação de componentes;
- uso de rotas com React Router;
- consumo de API externa;
- manipulação de estados com React Hooks;
- organização de estilos com CSS;
- responsividade para diferentes tamanhos de tela;
- deploy com Vercel;
- versionamento com Git e GitHub.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- CSS
- React Router DOM
- React Icons
- API do The Movie Database
- Git e GitHub
- Vercel

## Funcionalidades

- Listagem dos melhores filmes;
- Busca de filmes por nome;
- Página de detalhes para cada filme;
- Exibição de avaliação, orçamento, receita e duração;
- Tratamento de carregamento e erro;
- Layout responsivo para computador, tablet e celular.

## Estrutura do projeto

```txt
movies-lib/
├── public/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Search.jsx
│   │   ├── Movie.jsx
│   │   ├── Movie.css
│   │   └── MoviesGrid.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── package.json
└── README.md