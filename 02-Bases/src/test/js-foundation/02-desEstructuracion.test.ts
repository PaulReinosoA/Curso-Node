import { characters } from '../../js-foundation/02-desEstructuracion';

describe('pruebas sobre 02-desEstructuracion.ts', () => {
  test('characters debe de contener a superman y batman', () => {
    // console.log(characters);
    expect(characters).toContainEqual('Superman');
    expect(characters).toContainEqual('Batman');
  });

  test('characters tiene flash y superman en ese orden', () => {
    // console.log(characters);

    const [flash, superman] = characters;

    expect(flash).toBe('Flash');
    expect(superman).toBe('Superman');
  });
});
