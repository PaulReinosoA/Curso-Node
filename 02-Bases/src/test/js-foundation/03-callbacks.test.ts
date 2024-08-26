import { getUserById } from '../../js-foundation/03-callbacks';

describe('pruebas sobre 03-callbacks.ts', () => {
  test('getUserById debe de retornar mensaje de error', (done) => {
    const id = 10;
    getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();
      // console.log(err);
    });
    done();
  });

  test('getUserById debe encontrar un usuario', (done) => {
    const id = 1;
    getUserById(id, (err, user) => {
      // console.log(user);
      expect(user).toEqual({ id: 1, name: 'John Doe' });
      expect(err).toBeUndefined();
    });
    done();
  });
});
