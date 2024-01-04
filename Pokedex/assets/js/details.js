// Este bloco de código é executado quando o DOM é totalmente carregado
document.addEventListener("DOMContentLoaded", function() {
  // Obtém o parâmetro 'pokemon' da URL
  const urlParams = new URLSearchParams(window.location.search);
  const pokemonId = urlParams.get('pokemon');

  // Verifica se o parâmetro 'pokemon' existe na URL
  if (pokemonId) {
    // Monta a URL da API com base no ID do Pokémon
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

    // Faz uma requisição GET para a API do Pokémon usando fetch
    fetch(url)
      .then(response => response.json()) // Converte a resposta para JSON
      .then(data => {
        // Chama a função showAbout para exibir informações básicas sobre o Pokémon
        showAbout(data);

        // Atualiza elementos HTML com dados do Pokémon obtidos da API
        document.getElementById('pokemonName').innerText = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        document.getElementById('pokemonNumber').innerText = `#${String(data.id).padStart(3, '0')}`;
        document.getElementById('photo').src = data.sprites.other.dream_world.front_default;
        document.getElementById('types').innerText = data.types.map(type => type.type.name).join(' ');

        // Obtém e exibe as habilidades do Pokémon
        const abilities = data.abilities.map(ability => ability.ability.name);
        document.getElementById('abilities').innerText = abilities;
      })
      .catch(error => console.error('Error fetching Pokemon details:', error)); // Trata erros na requisição
  } else {
    console.error('No Pokemon ID found in URL'); // Exibe um erro se o parâmetro 'pokemon' não foi encontrado na URL
  }
});

// Função para exibir detalhes básicos do Pokémon na aba "About"
function showAbout(data) {
  const aboutTab = document.getElementById('about');
  // Atualiza o conteúdo HTML da aba "About" com informações básicas do Pokémon
  aboutTab.innerHTML = `
    <ul>
      <li><strong>Species:</strong> ${data.species.name}</li>
      <li><strong>Height:</strong> ${data.height}</li>
      <li><strong>Weight:</strong> ${data.weight}</li>
      <li><strong>Abilities:</strong> <span id="abilities"></span></li>
    </ul>`;
}

// Função para exibir a aba selecionada e ocultar as outras
function showTab(tabName) {
  const tabs = document.querySelectorAll('.pokemon-section');
  // Oculta todas as abas
  tabs.forEach(tab => tab.style.display = 'none');

  // Exibe a aba selecionada
  const selectedTab = document.getElementById(tabName);
  if (selectedTab) {
    selectedTab.style.display = 'block';
  }
}
