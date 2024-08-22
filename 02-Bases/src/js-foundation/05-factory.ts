// const { getUid, getAge } = require('../plugins');
// import { getAge, getUid } from '../plugins/';

interface BuildMakerPersonOptions {
  getUidD: () => string;
  getAgeD: (birthdate: Date) => number | Error;
}

interface PersonOptions {
  name: string;
  birthdate: Date;
}

export const buildMakePerson = ({
  getAgeD,
  getUidD,
}: BuildMakerPersonOptions) => {
  return ({ name, birthdate }: PersonOptions) => {
    return {
      id: getUidD(),
      name,
      birthdate,
      age: getAgeD(birthdate),
    };
  };
};

// const obj = { name: 'Paul', birthdate: '1995-04-02' };
// const paul = buildPerson(obj);
// console.log({ paul });

// https://www.npmjs.com/package/uuid --> genera identificadores

// module.exports = {
//   buildMakePerson,
// };
