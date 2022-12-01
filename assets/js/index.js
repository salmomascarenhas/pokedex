function convertsPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map(typeSlot => `<li class="type">${typeSlot.type.name}</li>`).join('')
}

function getPokemonImg(pokemon) {
    return 
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function pokemonToLi(pokemon){
    return `<li class="pokemon">
    <span class="number">#${pokemon.order}</span>
    <span class="name">${capitalizeFirstLetter(pokemon.name)}</span>

    <div class="detail">
        <ol class="types">
            ${convertsPokemonTypesToLi(pokemon.types)}
        </ol>
        <img src=${pokemon.sprites.other.dream_world.front_default} alt="${pokemon.name}">
    </div>
</li>`
}

pokeapi.getPokemons(0,10)
    .then((pokemons = []) => {
        document.getElementById('pokemons').innerHTML = pokemons.map(pokemonToLi).join('')})
