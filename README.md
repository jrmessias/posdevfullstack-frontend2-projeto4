# Tasty Burger - Projeto Frontend

Aplicação web de lanchonete de hambúrgueres desenvolvida em React com Bootstrap.

## Tecnologias

- **React** 18.2.0
- **React Bootstrap** 2.8.0
- **Bootstrap** 5.3.1
- **Bootstrap Icons** 1.10.5
- **React Router DOM** 6.15.0

## Como Executar

```bash
npm install
npm start
```

O aplicativo será aberto em [http://localhost:3000](http://localhost:3000)

## Estrutura de Páginas

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Home | Página principal com seções de conteúdo |
| `/about` | Sobre | História da empresa e equipe |
| `/menu` | Cardápio | Lista de 8 hambúrgueres com preços |
| `/shop` | Compras | Seção de download app e marcas |
| `/blog` | Blog | Depoimentos de clientes |
| `/contact` | Contato | Formulário de contato |

## Funcionalidades Implementadas

- Navegação entre páginas com React Router
- Cards de produtos com Bootstrap
- Formulário de contato com validação
- Design responsivo
- Ícones Bootstrap
- Imagens por IA

## Build para Produção

```bash
npm run build
```

## Estrutura do Projeto

```
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes reutilizáveis (Layouts)
├── pages/           # Páginas da aplicação
│   ├── Home/
│   ├── About/
│   ├── Menu/
│   ├── Shop/
│   ├── Blog/
│   └── Contact/
└── styles/          # Arquivos CSS
```
