$(document).ready(function () {
    let number, find, cardCount = 0;

    $('.btn').on('click', () => {
        $('.pokemon').empty();
        number = $('.input-number').val();
        for (let i = 1; i <= number; i++)
            catchimage(i);

    });


    async function catchimage(id) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        let pokemon = pokemonData(data);
        let card = addpokemon(pokemon);
        $('.pokemon').append(card);

    }


    $('.btn-name').on('click', () => {
        $('.pokemon').empty();
        find = $('.input-name').val();
        findpokemon(find);


    });

    async function findpokemon(name) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();

        let pokemon = pokemonData(data);
        let card = addpokemon(pokemon);
        $('.pokemon').append(card);
    }

    function pokemonData(data) {
        const pokemonCharacter = {
            id: data.id,
            name: data.name.toUpperCase(),
            image: data.sprites['front_default'],
            type: data.types.map((type) => type.type.name).join(', '),
            abilities: data.abilities.map((ability) => ability.ability.name).join(', ')
        }
        return pokemonCharacter;
    }

    function addpokemon(pokemon) {
        let card = `<div class="col ">
    <div class="card bg-dark text-light d-flex text-center">
      <img src="${pokemon.image}" class="card-img-top w-50 align-self-center" alt="...">
      <div class="card-body">
        <h5 class="card-title">${pokemon.id}. ${pokemon.name}</h5>
        <p class="card-text"> Type : ${pokemon.type}</p>
        <p class="card-text"> Abilities : ${pokemon.abilities}</p>
      </div>
    </div>
  </div>`;

        return card;
    }

});