const listaSelecaoPokemon = document.querySelectorAll('.poke-icone')
const pokemonCards = document.querySelector('.card-pokemon')

listaSelecaoPokemon.forEach(pokemon => {

    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        
        const idPokemonSelecionado = pokemon.attributes.id.value

        const cartaoPokemonParaAbrir = document.getElementById('card-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivo = document.querySelector('.ativo')
        pokemonAtivo.classList.remove('ativo')

        const pokemonAtivoSelecionado = document.getElementById(idPokemonSelecionado)
        pokemonAtivoSelecionado.classList.add('ativo')   
    })
})