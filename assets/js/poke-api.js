const pokeapi = {}

pokeapi.getPokemons = (offset=0, limit=10) => {
const url = `https://pokeapi.co/api/v2/pokemon?${offset}=0&limit=${limit}`

return fetch(url)
    .then(response => response.json())
    .then(data => data.results)
    .catch(error => console.error('Error:', error))
}

