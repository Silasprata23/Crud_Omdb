document.addEventListener('DOMContentLoaded', () => {

    // pegar elemento do html
   const pesquisarElement = document.getElementById("pesquisa");

  //chave da api necessária para fazer as requisição
    const key = '3fdb5b8d';

    // função que ira buscar os filmes ou séris na api
    async function buscarfilme(query) {


        try {
            const url = await fetch(`http://www.omdbapi.com/?t=${query}&apikey=${key}`)
            const dados = await url.json();
            console.log(dados)
        } catch (error) {
            console.error("deu ruim", error)
        }

    }

        pesquisarElement.addEventListener("change" ,function () {
            const query = document.getElementById("pesquisa").value;

            console.log(query)

            buscarfilme(query);
        })






})