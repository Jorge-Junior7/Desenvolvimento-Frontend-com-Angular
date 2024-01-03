// Obtém referência para a lista de Pokémon e botão de carregar mais
const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

// Define limite máximo de registros e limite de registros por carga
const maxRecords = 100;
const limit = 5;
let offset = 0; // Inicializa o deslocamento dos registros

// Redireciona para a página de detalhes quando um Pokémon é clicado
function redirectToDetails(pokemonName) {
  window.location.href = `details.html?pokemon=${pokemonName}`;
}

// Carrega os Pokémon na lista
function loadPokemonItems(offset, limit) {
  // Obtém os Pokémon da API
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    // Cria o HTML para cada Pokémon retornado
    const newHtml = pokemons.map((pokemon) => `
      <li class="pokemon ${pokemon.type}" onclick="redirectToDetails('${pokemon.name}')">
        <span class="number">${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
          <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
          </ol>
          <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
      </li>
    `).join('');

    // Adiciona o HTML dos Pokémon à lista existente
    pokemonList.innerHTML += newHtml;
  });
}

// Carrega os primeiros Pokémon ao iniciar a página
loadPokemonItems(offset, limit);

// Adiciona um listener para o botão "Load More"
loadMoreButton.addEventListener('click', () => {
  offset += limit; // Incrementa o deslocamento

  const qtdRecordNextPage = offset + limit;

  // Verifica se atingiu o limite máximo de registros
  if (qtdRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItems(offset, newLimit); // Carrega os últimos Pokémon restantes

    loadMoreButton.parentElement.removeChild(loadMoreButton); // Remove o botão após atingir o limite
  } else {
    loadPokemonItems(offset, limit); // Carrega mais Pokémon
  }
});
