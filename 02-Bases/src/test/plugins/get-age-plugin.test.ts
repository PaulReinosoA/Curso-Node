import { getAge } from '../../plugins/get-age-plugin';
import moment from 'moment';

describe('pruebas sobre get-age-plugin.ts', () => {
  test('getAge debe de retornar el año actual', () => {
    const age = getAge(new Date('1995-04-02'));
    // console.log({ age });
    expect(age).toBe(29);
    expect(typeof age).toBe('number');
  });

  test('getAge debe de retornar 0', () => {
    const spy = jest.spyOn(moment.prototype, 'diff').mockReturnValue(0);
    const age = getAge(new Date('1995-04-02'));
    // console.log({ age });
    expect(age).toBe(0);
    expect(spy).toHaveBeenCalled();
    spy.mockClear();
    // expect(typeof age).toBe('number');
  });
});
