import { getPokemonById } from '../../js-foundation/06-promesas';

describe('preubas sobre 06-promesas.ts', () => {
  test('debe de  retornar un pokemon', async () => {
    const idPokemon = 4;
    const pokemon = await getPokemonById(idPokemon);
    // console.log(pokemon);
    expect(pokemon).toBe('charmander');
  });

  test('debe de retornar un error si el pokemon no existe', async () => {
    const idPokemon = 10000000000;
    const pokemon = await getPokemonById(idPokemon);
    // console.log(pokemon);
    expect(pokemon).toBe(`with id:${idPokemon} not found pokemon`);
  });
});
