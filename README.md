# React16SampleProject

Front-end de uma estrutura básica para os projetos da SD.

## Instalação

Duplicar o arquivo `.env.example` e renomear para `.env`, executar o seguinte comando:

```
yarn
```

## Iniciar a aplicação

Executar o seguinte comando:

```
yarn start
```

## Opções de template

O layout padrão contempla dois menus, um lateral e um no topo.

### Menu Lateral

Para remover o menu lateral basta fazer as seguintes alterações no arquivo `src/pages/BaseLayout.js`:
  - Mudar o `import { TopBar, SideBar, Container, } from 'components'` para `import { TopBar, Container, } from 'components'` na linha 5.
  - Remover a linha `<SideBar />` na linha 22.

### Menu do Topo

Para remover o menu do topo basta fazer as seguintes alterações no arquivo `src/components/TopBar/TopBar.js`:
  - Remover a linha `import TopMenu from './TopMenu'` na linha 8.
  - Remover a linha `<TopMenu />` na linha 28.
