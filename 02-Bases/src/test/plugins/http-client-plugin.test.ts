import { getHttpClientPlugin as http } from '../../plugins/http-client-plugin';

describe('preubas sobre http-client-plugin.ts', () => {
  const id = 1;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  test('getHttpClientPlugin debe de retornar un string', async () => {
    const pokemon = await http.get(url);
    const name = pokemon.data.name;
    // console.log(pokemon.data);
    expect(typeof name).toBe('string');

    expect({ name: pokemon.data.name }).toEqual({
      name: 'bulbasaur',
    });
  });

  test('los metodos post delete put deben existir', () => {
    expect(typeof http.post).toBe('function');
    expect(typeof http.put).toBe('function');
    expect(typeof http.delete).toBe('function');
  });
});
