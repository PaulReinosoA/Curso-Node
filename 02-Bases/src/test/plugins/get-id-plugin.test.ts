import { getUid } from '../../plugins/get-id-plugin';

describe('pruebas sobre get-id-plugin.ts', () => {
  test('getUid debe de retornar un ID', () => {
    const id = getUid();
    console.log(id);
    expect(typeof id).toBe('string');
    expect(id.length).toBe(36);
  });

  
});
