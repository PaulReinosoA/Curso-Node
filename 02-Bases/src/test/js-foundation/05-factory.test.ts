import { buildMakePerson } from '../../js-foundation/05-factory';
import { getUid, getAge } from '../../plugins';
// const { getUid, getAge } = require('../plugins');

describe('preubas sobre 05-factory.ts', () => {
  test('debe de regresar una funcion', () => {
    const makePerson = buildMakePerson({ getUidD: getUid, getAgeD: getAge });
    expect(typeof makePerson).toBe('function');
  });

  test('debe de regresar una persona', () => {
    const getUidD = () => '12356';
    const makePerson = buildMakePerson({ getUidD: getUidD, getAgeD: getAge });
    const paul = makePerson({
      name: 'Paul',
      birthdate: new Date('1995-04-02'),
    });
    // console.log(paul);
    expect(paul).toEqual({
      id: '12356',
      name: 'Paul',
      birthdate: new Date('1995-04-02'),
      age: 29,
    });
  });
});
