// Objeto pokeApi para conter métodos relacionados à API Pokémon
const pokeApi = {}

// Função para converter detalhes da API em um objeto Pokemon
function convertPokeApiDetailToPokemon(pokeDetail) {
    // Cria um novo objeto Pokemon
    const pokemon = new Pokemon()

    // Atribui número e nome do Pokémon
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    // Obtém tipos do Pokémon
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types;

    // Define os tipos e tipo principal do Pokémon
    pokemon.types = types;
    pokemon.type = type

    // Obtém a foto do Pokémon
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon // Retorna o objeto Pokemon criado
}

// Método para obter detalhes de um Pokémon específico
pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon); // Converte detalhes em um objeto Pokemon
}

// Método para obter uma lista de Pokémon com paginação
pokeApi.getPokemons = (offset = 0, limit = 5) => {
    // URL da API para obter uma lista de Pokémon com limite e deslocamento
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url) // Faz uma requisição à API
        .then((response) => response.json()) // Converte a resposta para JSON
        .then((jsonBody) => jsonBody.results) // Obtém a lista de resultados
        .then((pokemons) => pokemons.map((pokeApi.getPokemonDetail))) // Mapeia cada Pokémon para obter seus detalhes
        .then((detailRequests) => Promise.all(detailRequests)) // Aguarda o retorno de todas as requisições
        .then((pokemonsDetails) => pokemonsDetails) // Retorna os detalhes de todos os Pokémon
}
