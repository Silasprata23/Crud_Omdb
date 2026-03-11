document.addEventListener('DOMContentLoaded', () => {

    // pegar elemento do html
   const pesquisarElement = document.getElementById("pesquisa");



   //função que cria os card
    function criarCard(dados) {
        // Pegando uma <div> no HTML onde será criado o card
        const conteiner = document.getElementById("conteiner")

        //Criando um div chamanda card
        const card = document.createElement("div");
        card.classList.add("card")
        //Criando o h1
        const h1 = document.createElement("h1")
        // Atribuindo o texto vindo da API ao <h1> para ser exibido no HTML
        h1.textContent = dados.Title;
        // Criando uma tag <img>, atribuindo uma classe a ela, o link da imagem e a descrição
            const img = document.createElement("img")
        img.classList.add("img")
        img.src = dados.Poster;
            img.alt = dados.Title

        // Criando um <p> com a descrição do filme
            const description = document.createElement("p")
        description.textContent = dados.Plot
        // Cria um <p> para mostrar o gênero do filme
        const pGenre = document.createElement("p")
        pGenre.textContent = `Gênero:  ${dados.Genre}`;
        // Apagando o card para não criar mais de um
            conteiner.innerHTML = ""
        // Criando o card para exibir as informações do filme
       card.appendChild(img);
        card.appendChild(h1);
        card.appendChild(description);
        card.appendChild(pGenre)
        // Adiciona o card à div container
        conteiner.appendChild(card)

    }


  //chave da api necessária para fazer as requisição
    const key = '3fdb5b8d';

    // função que ira buscar os filmes ou séris na api
    async function buscarfilme(query) {

        try {
            // Método fetch que faz a requisição para a API
            const url = await fetch(`https://www.omdbapi.com/?t=${query}&apikey=${key}`)
            //Salvando a resposta da api em formato json
            const dados = await url.json();
            //Validação para não criar um card quando não tem filme
            if (dados.Response == "True"){
                //resposta da api se ela retornar que a resposta for true e chamado a função criar card
                criarCard(dados)
            }else{
                // Se a resposta for false ele ira exibir um alerta ao usuario
                alert("O filme não existe")
            }
            //caso a requisição falhe o erro ira ser exibido no console
        }
        catch (error) {
            console.error("deu ruim", error)
        }

    }
// Quando o usuário termina de digitar e sai do input, o valor digitado é armazenado na variável query,que é usada como parâmetro para a função buscarFilme.

    pesquisarElement.addEventListener("change" ,function () {
            const query = document.getElementById("pesquisa").value;
            //chamdo função buiscar filme
            buscarfilme(query);

        })







})