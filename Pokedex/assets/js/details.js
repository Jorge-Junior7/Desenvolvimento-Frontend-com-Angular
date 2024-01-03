document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonId = urlParams.get('pokemon');
  
    if (pokemonId) {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const pokemonName = data.name;
          document.getElementById('pokemonName').innerText = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
  
          document.getElementById('pokemonNumber').innerText = `#${data.id}`;
  
          const types = data.types.map(type => type.type.name).join(', ');
          document.getElementById('types').innerText = types;
  
          const photo = data.sprites.other.dream_world.front_default;
          if (photo) {
            document.getElementById('photo').src = photo;
          } else {
            console.error('No photo available for this Pokemon');
          }
  
          document.getElementById('species').innerText = data.species.name;
          document.getElementById('height').innerText = data.height;
          document.getElementById('weight').innerText = data.weight;
  
          const abilities = data.abilities.map(ability => ability.ability.name).join(', ');
          document.getElementById('abilities').innerText = abilities;
  
          // You may need to fetch additional details for gender, egg groups, and egg cycle
          // As PokeAPI may not provide all these details directly for a specific Pokemon
        })
        .catch(error => console.error('Error fetching Pokemon details:', error));
    } else {
      console.error('No Pokemon ID found in URL');
    }
  });
  