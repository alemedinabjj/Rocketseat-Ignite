# Ignite Shop

Este é um aplicativo Next.js para a Ignite Shop. Ele exibe uma página inicial com uma lista de produtos e seus respectivos preços.

## Instalação

1. Clone o repositório: `git clone [URL do repositório]`
2. Navegue até o diretório do projeto: `cd ignite-shop`
3. Instale as dependências: `npm install`

## Uso

1. Execute o servidor de desenvolvimento: `npm run dev`
2. Abra seu navegador e visite: `http://localhost:3000`

## Tecnologias Utilizadas

- Next.js
- React
- Keen Slider
- Stitches
- API do Stripe

## Estrutura do Projeto

O arquivo principal para a página inicial está localizado em `pages/home.tsx`. Ele busca uma lista de produtos na API do Stripe usando a função `getStaticProps`. Os produtos obtidos são então renderizados na página inicial.

### Componentes

- `HomeContainer`: O componente de contêiner para a página inicial.
- `Product`: Um componente que representa um item de produto único.

### Estilos

Os estilos para a página inicial estão localizados em `styles/pages/home.ts`. Os componentes `HomeContainer` e `Product` têm seus respectivos estilos definidos neste arquivo.

## Contribuição

Contribuições para o projeto Ignite Shop são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhoria, abra uma issue ou envie uma pull request.

## Deploy

O projeto está atualmente implantado e disponível neste [link](https://ignite-shop-alemedinabjj.vercel.app/).
