// const { http } = require('../plugins');

// const getPokemonById = async (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//   // fetch(url).then((response) => {
//   //   response.json().then((pokemon) => {
//   //     console.log(pokemon);
//   //     return pokemon.name;
//   //   });
//   // });

//   // return fetch(url)
//   //   .then((resp) => resp.json())
//   //   .then((pokemon) => pokemon.name);

//   // const resp = await fetch(url);
//   // const pokemon = await resp.json();

//   // return pokemon.name;

//   const pokemon = await http.get(url);
//  // console.log(pokemon);
//   return pokemon;
// };

// module.exports = {
//   getPokemonById,
// };
import { getHttpClientPlugin as http } from '../plugins/http-client-plugin';
// const { http } = require('../plugins');

export const getPokemonById = async (id: string | number): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  try {
    const pokemon = await http.get(url);
    return pokemon.data.name;
  } catch (error) {
    console.log(error);
    return `with id:${id} not found pokemon`;
  }
  // const pokemon = await http.get(url);

  // const resp = await fetch( url );
  // const pokemon = await resp.json();

  // throw new Error('Pokemon no existe');

  // return pokemon.data.name;

  // return fetch( url )
  //   .then( ( resp ) => resp.json())
  //   // .then( () => { throw new Error('Pokemon no existe') })
  //   .then( ( pokemon ) => pokemon.name );
};
