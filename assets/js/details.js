document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonId = urlParams.get('id');

    if (pokemonId) {
        pokeApi.getPokemonById(pokemonId).then((pokemon) => {
            if (pokemon) {
                const pokemonDetailDiv = document.getElementById('pokemon-detail');
                pokemonDetailDiv.innerHTML = convertPokemonToDetailHtml(pokemon);
                pokemonDetailDiv.classList.add(pokemon.type);
            }
        });
    }
});

function convertPokemonToDetailHtml(pokemon) {
    return `
        <h1>${pokemon.name}</h1>
        <span class="number">#${pokemon.id}</span>
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
        <ul class="pokemon-stats">
            ${pokemon.stats.map((stat) => `<li>${stat.stat.name}<span>${stat.base_stat}</span></li>`).join('')}
        </ul>
    `;
}
