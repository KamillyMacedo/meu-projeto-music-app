# Projeto Spotify Clone

Uma aplicação web que imita as principais funcionalidades do Spotify, como reprodução de músicas e exibição de álbuns e faixas. Feito utilizando **TypeScript**, **HTML**, **CSS**, **MongoDB**, e **Visual Studio Code** como editor de código.

## Demonstração

Você pode visualizar uma demonstração do aplicativo, do design e funcionalidades no vídeo abaixo:

https://github.com/user-attachments/assets/1597724a-0f8b-4d10-8c14-d8a207d9e5ba

## Tecnologias Usadas

- **Frontend**:
  - **TypeScript**
  - **HTML5**
  - **CSS3**
  - **JavaScript (ES6+)**

- **Backend**:
  - **Node.js** (para gerenciar o servidor)
  - **Express.js** (para rotas e requisições HTTP)
  - **MongoDB** (para armazenamento de dados, como músicas, playlists e usuários)

- **Ferramentas de Desenvolvimento**:
  - **Visual Studio Code** (IDE)
  - **Postman** (para testar a API)
  - **Git** (controle de versão)

## Funcionalidades

- **Página inicial**: Exibe uma lista de músicas recomendadas, álbuns e playlists.
- **Reprodução de músicas**: Inclui um player embutido para reproduzir faixas.
- **Exibição de informações das músicas**: Mostra o nome do artista, álbum e capa das músicas.

## Como Rodar o Projeto Localmente

Siga os passos abaixo para rodar o projeto em seu ambiente local:


### 1. **Clonando o Repositório**

Clone o repositório para sua máquina local 

### 2. **Instalando as Dependências**

Após clonar o repositório, entre na pasta do projeto e instale as dependências necessárias com o comando:

npm install

### 3. **Configurando o Banco de Dados (MongoDB)**

Você precisará configurar o MongoDB para que o projeto funcione corretamente.

Abra o arquivo connect.js localizado em backend/api/connect.js.
Dentro do arquivo connect.js, você encontrará a string de conexão do MongoDB

### 4. **Rodando o Servidor**

Agora, inicie o servidor com o seguinte comando:

bash
node server.js

O servidor estará rodando e você poderá acessar a aplicação localmente nos seguintes endereços:

  Frontend (Aplicativo Web): http://localhost:5173
  
  Backend (API): http://localhost:3010

## Conclusão

Este projeto me proporcionou diversos aprendizados importantes, tanto no front-end quanto no back-end, e me ajudou a melhorar minhas habilidades como desenvolvedor iniciante.

Front-End: Trabalhei com HTML, CSS, React e TypeScript para criar uma interface responsiva e dinâmica, consumindo dados de uma API.

Back-End: Usei Node.js e Express.js para construir o servidor, além de integrar o MongoDB para gerenciar dados.

Integração Full Stack: Aprendi a conectar o front-end com o back-end e a manipular dados dinamicamente entre as camadas.

Git e GitHub: Utilizei Git para versionar o código e GitHub para organização e colaboração no projeto.

Organização do Código: Aprendi a estruturar o código de forma modular e limpa, facilitando a manutenção e escalabilidade.

Esse projeto foi fundamental para o meu aprendizado e me motivou a continuar explorando o desenvolvimento full-stack.



