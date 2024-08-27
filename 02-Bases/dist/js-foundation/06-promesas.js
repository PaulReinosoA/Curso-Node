"use strict";
// const { http } = require('../plugins');
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = void 0;
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
const http_client_plugin_1 = require("../plugins/http-client-plugin");
// const { http } = require('../plugins');
const getPokemonById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    try {
        const pokemon = yield http_client_plugin_1.getHttpClientPlugin.get(url);
        return pokemon.data.name;
    }
    catch (error) {
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
});
exports.getPokemonById = getPokemonById;
