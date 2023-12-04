const offset = 0; //define a página
const limit = 10; //define a quantidade de itens
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`; //

fetch(url)
   //Versão com arrow
   .then((response) => response.json())//converte a promess: json
   .then((jsonBody) => console.log(jsonBody)) //imprime a api
   .catch((error) => console.error(error))
   //sempre mlhr  utilizar essa maneira de erro pois exibe os detalhes do erro



