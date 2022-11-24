function pokemonToLi(pokemon){
    return `<li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
        </ol>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg"
            alt="${pokemon.name}">
    </div>
</li>`
}

pokeapi.getPokemons(0,10)
    .then((pokemons = []) => {
        document.getElementById('pokemons').innerHTML = pokemons.map(pokemonToLi).join('')})
