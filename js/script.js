document.addEventListener('DOMContentLoaded', () => {

    // pegar elemento do html
   const pesquisarElement = document.getElementById("pesquisa");



    function criarCard(dados) {
        const conteiner = document.getElementById("conteiner")

        const card = document.createElement("div");
        card.classList.add("card")

        const h1 = document.createElement("h1")
        h1.textContent = dados.Title;

            const img = document.createElement("img")
        img.classList.add("img")
        img.src = dados.Poster;

            const description = document.createElement("p")
        description.textContent = dados.Plot

        const genre = document.createElement("p")
        genre.textContent = `Gênero:  ${dados.Genre}`;





        card.appendChild(h1);
        card.appendChild(img);
        card.appendChild(description);
        card.appendChild(genre)

        conteiner.appendChild(card)

    }


  //chave da api necessária para fazer as requisição
    const key = '3fdb5b8d';

    // função que ira buscar os filmes ou séris na api
    async function buscarfilme(query) {


        try {
            const url = await fetch(`http://www.omdbapi.com/?t=${query}&apikey=${key}`)
            const dados = await url.json();
            console.log(dados)
            if (dados.Response == "True"){
                criarCard(dados)
            }else{
                alert("O filme não existe")
            }

        } catch (error) {
            console.error("deu ruim", error)
        }


    }

        pesquisarElement.addEventListener("change" ,function () {
            const query = document.getElementById("pesquisa").value;

            buscarfilme(query);

        })







})