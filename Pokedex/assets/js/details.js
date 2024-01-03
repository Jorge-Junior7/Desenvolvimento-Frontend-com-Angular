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
        document.getElementById('pokemonNumber').innerText = `#${data.id}`;
        document.getElementById('photo').src = data.sprites.other.dream_world.front_default;
        document.getElementById('types').innerText = data.types.map(type => type.type.name).join(', ');

        const abilities = data.abilities.map(ability => ability.ability.name);
        document.getElementById('abilities').innerText = abilities;
      })
      .catch(error => console.error('Error fetching Pokemon details:', error));
  } else {
    console.error('No Pokemon ID found in URL');
  }
});

function showAbout(data) {
  const aboutTab = document.getElementById('about');
  aboutTab.innerHTML = `
    <h2>About</h2>
    <ul>
      <li><strong>Species:</strong> ${data.species.name}</li>
      <li><strong>Height:</strong> ${data.height}</li>
      <li><strong>Weight:</strong> ${data.weight}</li>
      <li><strong>Abilities:</strong> <span id="abilities"></span></li>
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
