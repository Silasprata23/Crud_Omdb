document.addEventListener('DOMContentLoaded', () => {


    const pesquisarElement = document.getElementById("pesquisa");
    const test = document.getElementById("pesquisa").value;

    const key = '3fdb5b8d' ;
    const query = test;

    // função que ira buscar os filmes ou séris na api
    async function buscarfilme(){
        try {
            const url = await  fetch(`http://www.omdbapi.com/?t=${query}&apikey=${key}`)
            const dados = await url.json();
            console.log(dados)
        }catch (error){
            console.error("deu ruim" , error)
        }

    }

    pesquisarElement.addEventListener("input", buscarfilme)
    buscarfilme();






})