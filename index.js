const axios = require("axios");

const pokemon = "pikachu";

async function buscarPokemon() {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (erro) {
        console.log("Erro ao buscar Pokémon");
    }
}

buscarPokemon();