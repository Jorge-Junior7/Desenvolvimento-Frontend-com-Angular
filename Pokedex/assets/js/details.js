document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const pokemonId = urlParams.get('pokemon');

  if (pokemonId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        showAbout(data);

        document.getElementById('pokemonName').innerText = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        document.getElementById('pokemonNumber').innerText = `#${String(data.id).padStart(3, '0')}`;
        document.getElementById('photo').src = data.sprites.other.dream_world.front_default;

        const types = data.types.map(type => type.type.name);
        document.getElementById('types').innerText = types.join(', ');

        const topSection = document.querySelector('.top-section');
        topSection.classList.add(types[0]); // Adiciona a classe do primeiro tipo
      })
      .catch(error => console.error('Error fetching Pokemon details:', error));
  } else {
    console.error('No Pokemon ID found in URL');
  }
});

function showAbout(data) {
  const aboutTab = document.getElementById('about');
  aboutTab.innerHTML = `
    <ul>
      <li><strong>Species:</strong> ${data.species.name}</li>
      <li><strong>Height:</strong> ${data.height}</li>
      <li><strong>Weight:</strong> ${data.weight}</li>
      <li><strong>Types:</strong> <span id="types"></span></li>
    </ul>`;
}

function showTab(tabName) {
  const tabs = document.querySelectorAll('.pokemon-section');
  tabs.forEach(tab => tab.style.display = 'none');

  const selectedTab = document.getElementById(tabName);
  if (selectedTab) {
    selectedTab.style.display = 'block';
  }
}
