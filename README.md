
# 🎬 Buscador de Filmes - OMDb API

Aplicação web que permite pesquisar filmes utilizando a OMDb API.
O usuário digita o nome de um filme no campo de pesquisa e a aplicação faz uma requisição para a API, retornando os resultados em forma de cards exibidos na tela.

Este projeto foi desenvolvido com o objetivo de praticar consumo de APIs, manipulação do DOM e JavaScript assíncrono.

---

# 📁 Estrutura do Projeto
```
Crud_Omdb
│
├── index.html
├── README.md
│
├── js
│   └── script.js
│
├── style
   ├── reset.css
   └── style.css

```
Descrição:

 - index.html → Estrutura principal da aplicação.

- script.js → Contém a lógica de busca, consumo da API e criação dinâmica dos cards.

 - reset.css → Remove estilos padrão do navegador.

 - style.css → Responsável pela estilização da aplicação.

 - README.md → Documentação do projeto.

---


# 🚀 Demonstração

A aplicação está hospedada na Vercel.

## 🔗 Link do projeto:
### (https://crud-omdb.vercel.app/)

---
# 🛠️ Tecnologias utilizadas

- HTML5

- CSS3

- JavaScript

- OMDb API

- Vercel (deploy)
 
---
# ⚙️ Funcionalidades

 - Permitir que o usuário pesquise filmes através de um campo de busca.
 - Realizar requisições para a OMDb API utilizando JavaScript.
 - Exibir os resultados da pesquisa em forma de cards na tela.
 - Mostrar informações do filme como:
   - Título
   - Imagem (poster)
 - Exibir uma mensagem de alerta caso o filme não seja encontrado.

---
# 🔄 Fluxo da Aplicação

1. O usuário digita o nome de um filme no campo de pesquisa.
2. O JavaScript captura o valor digitado.
3. Uma requisição é enviada para a OMDb API utilizando fetch.
4. A API retorna um JSON com os dados dos filmes.
5. O JavaScript processa os dados recebidos.
6. Para cada filme retornado, um card é criado dinamicamente no HTML.
7. Caso nenhum filme seja encontrado, uma mensagem de erro é exibida ao usuário.

---

# ▶️ Como Executar o Projeto
  ### 1️⃣ Clonar o repositório
```
git clone https://github.com/Silasprata23/Crud_Omdb.git
```

 ### 2️⃣ Entrar na pasta do projeto
```
cd Crud_Omdb
```
  ### 3️⃣ Abrir o projeto
```
Abra o arquivo index.html no navegador.
```

---

# 🌐 Exemplo de Endpoint Utilizado

A aplicação utiliza o seguinte endpoint da OMDb API:
```
https://www.omdbapi.com/?s=nomeDoFilme&apikey=suaChave
```
Exemplo:
```
https://www.omdbapi.com/?s=batman&apikey=123456
```

Esse endpoint retorna uma lista de filmes relacionados à pesquisa.

---

# 🌐 API utilizada

Este projeto utiliza a API pública:

OMDb API

 Ela fornece informações sobre filmes, séries e episódios.

---
# 📚 Aprendizados


- Durante o desenvolvimento deste projeto foram praticados:

    - Consumo de APIs REST
    - Manipulação do DOM
    - Programação assíncrona com async/await
    - Eventos do JavaScript
    - Deploy de aplicações web

---
# 👨‍💻 Autor da Sprint

### Professor Atila Olivi

---

# 👨‍💻 Autores 

<p align="left">
 <h3>Silas Prata Pereira: </h3>
  <a href="https://github.com/Silasprata23">
    <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white" />
  </a> 
  <br/>
 <h3> Gabriel Luciano fernandes de melo: </h3>
  <a href="https://github.com/GabrielLFM">
    <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white" />
  </a>
<p/>

---

