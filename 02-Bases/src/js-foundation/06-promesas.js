const { http } = require('../plugins');

const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  // fetch(url).then((response) => {
  //   response.json().then((pokemon) => {
  //     console.log(pokemon);
  //     return pokemon.name;
  //   });
  // });

  // return fetch(url)
  //   .then((resp) => resp.json())
  //   .then((pokemon) => pokemon.name);

  // const resp = await fetch(url);
  // const pokemon = await resp.json();

  // return pokemon.name;

  const pokemon = await http.get(url);
 // console.log(pokemon);
  return pokemon;
};

module.exports = {
  getPokemonById,
};
