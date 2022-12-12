function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function pokemonToLi(pokemon){
    return `<li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${capitalizeFirstLetter(pokemon.name)}</span>

    <div class="detail">
        <ol class="types">
            ${pokemon.types.map(type => `<li class="type ${pokemon.type}">${type}</li>`).join('')}
        </ol>
        <img src=${pokemon.photo} alt="${pokemon.name}">
    </div>
</li>`
}

pokeapi.getPokemons(0,10)
    .then((pokemons = []) => {
        document.getElementById('pokemons').innerHTML = pokemons.map(pokemonToLi).join('')})
