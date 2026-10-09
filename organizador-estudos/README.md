# Organizador de Estudos

## Integrantes

- Carlos Eduardo
- Paulo Diego
- Henrique Cruz
- João Paulo Carvalho
- Ruan da Silva Almeida

## Sobre o projeto

O **Organizador de Estudos** é uma aplicação web desenvolvida em React com o objetivo de auxiliar estudantes na organização de suas atividades acadêmicas.

A aplicação permite acompanhar disciplinas e gerenciar tarefas de estudo, identificando atividades pendentes e concluídas.

Na página inicial, o usuário pode visualizar um resumo de seus estudos, incluindo a quantidade de disciplinas cadastradas, tarefas pendentes, tarefas concluídas e o percentual de progresso.

O projeto foi desenvolvido como atividade acadêmica da disciplina de Programação Web II, utilizando conceitos fundamentais de React.

## Tecnologias utilizadas

- **React:** construção da interface utilizando componentes.
- **JavaScript:** implementação da lógica da aplicação.
- **Vite:** ferramenta de desenvolvimento e construção do projeto.
- **React Router DOM:** navegação entre as páginas.
- **CSS:** estilização da interface.
- **Vitest:** execução dos testes automatizados.
- **React Testing Library:** testes dos componentes React.
- **Testing Library User Event:** simulação de interações do usuário.

## Como instalar

É necessário ter o Node.js e o npm instalados no computador.

1. Baixe ou clone o repositório do projeto.
2. Abra a pasta do projeto no VS Code.
3. Abra o terminal na pasta que contém o arquivo `package.json`.
4. Instale as dependências:

```bash
npm install
```

## Como executar

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
```

O terminal exibirá um endereço local para acessar a aplicação pelo navegador.

## Como executar os testes

O projeto utiliza Vitest e React Testing Library para realizar testes automatizados.

Para executar os testes:

```bash
npm run test
```

Os testes verificam funcionalidades como:

- Renderização de componentes React.
- Exibição de informações recebidas por props.
- Interações com tarefas e atualização da interface.
- Exibição de informações quando não existem tarefas cadastradas.

Na execução verificada durante o desenvolvimento, os cinco testes existentes foram aprovados.

## Estrutura do projeto

A aplicação está organizada em pastas para facilitar a manutenção do código.

```text
src/
├── components/
│   ├── Header.jsx
│   ├── ResumoCard.jsx
│   ├── TarefaCard.jsx
│   └── TarefaCard.test.jsx
├── data/
│   ├── disciplinas.js
│   └── tarefas.js
├── layouts/
│   └── MainLayout.jsx
├── pages/
│   ├── Home.jsx
│   ├── Home.test.jsx
│   ├── Disciplinas.jsx
│   ├── DetalhesDisciplina.jsx
│   ├── Tarefas.jsx
│   ├── Tarefas.test.jsx
│   ├── Sobre.jsx
│   └── NotFound.jsx
├── routes/
│   └── AppRoutes.jsx
├── test/
│   └── setup.js
├── App.jsx
└── App.css
```

A estrutura apresentada destaca os principais arquivos identificados durante a revisão, sem necessariamente listar todos os arquivos do projeto.

## Funcionalidades

- Visualização do resumo geral dos estudos.
- Exibição de disciplinas.
- Acesso aos detalhes de uma disciplina.
- Listagem de tarefas.
- Cadastro de tarefas.
- Marcação de tarefas como concluídas.
- Contagem de tarefas pendentes e concluídas.
- Cálculo do percentual de progresso.
- Visualização de tarefas recentes.
- Alternância entre a lista resumida e a lista completa de tarefas recentes.
- Exibição de mensagem quando não existem tarefas cadastradas.
- Navegação entre páginas utilizando React Router DOM.
- Exibição de uma página de erro 404 para endereços inexistentes.

## Conceitos de React utilizados

O projeto demonstra a aplicação de conceitos fundamentais do React:

- Componentização e reutilização de componentes.
- Comunicação entre componentes utilizando props.
- Utilização da propriedade `children`.
- Gerenciamento de estado com `useState`.
- Utilização de `useEffect`.
- Renderização condicional.
- Renderização de listas com `.map()` e `key`.
- Navegação com React Router DOM.
- Utilização de `Outlet` para rotas aninhadas.

## Testes

Os testes estão organizados em arquivos com a extensão `.test.jsx`.

Os componentes e páginas testados incluem:

- `TarefaCard`
- `Home`
- `Tarefas`

A suíte contém cinco testes automatizados, abrangendo verificações de componentes e integração de funcionalidades.

## Objetivo acadêmico

Aplicar na prática os principais conceitos estudados em React, incluindo componentes, hooks, props, rotas e testes automatizados, desenvolvendo uma aplicação organizada e funcional em equipe.