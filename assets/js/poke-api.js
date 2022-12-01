const pokeapi = {}

pokeapi.getPokemonDetails = (pokemon) => {
    return  fetch(pokemon.url)
                .then(response => response.json())
}

pokeapi.getPokemons = (offset=0, limit=10) => {
const url = `https://pokeapi.co/api/v2/pokemon?${offset}=0&limit=${limit}`

return fetch(url)
    .then(response => response.json())
    .then(jsonBody => jsonBody.results)
    .then(pokemons => Promise.all(pokemons.map(pokeapi.getPokemonDetails)))
    .then(pokemonsDetails => pokemonsDetails)
    .catch(error => console.error('Error:', error))

}

