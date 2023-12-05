const offset = 0; // define a página
const limit = 10; // define a quantidade de itens
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
  return `<li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
      <ol class="types">
        <li class="type">grass</li>
        <li class="type">poison</li>
      </ol>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="${pokemon.name}">
    </div>
  </li>`;
}

const pokemonList = document.getElementById('pokemonList');

fetch(url)
  .then((response) => response.json()) // converte a resposta para JSON
  .then((jsonBody) => jsonBody.results) // obtém a lista de pokemons
  .then((pokemons) => { // manipula a lista de pokemons
    for (let i = 0; i < pokemons.length; i++) {
      const pokemon = pokemons[i];
      pokemonList.innerHTML += convertPokemonToLi(pokemon);
      // converte cada pokemon para HTML e o adiciona à lista de pokemons
    }
  })
  .catch((error) => console.error(error)); // lida com erros, se houverem
