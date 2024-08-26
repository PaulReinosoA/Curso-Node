import { getUserById } from '../../js-foundation/03-callbacks';

describe('pruebas sobre 03-callbacks.ts', () => {
  test('getUserById debe de retornar mensaje de error', () => {
    const id = getUserById(1, () => {});
    console.log(id);
  });
});
