// const { getUid, getAge } = require('../plugins');

const buildMakePerson = ({ getUid, getAge }) => {
  return ({ name, birthdate }) => {
    return {
      id: getUid(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };
};

// const obj = { name: 'Paul', birthdate: '1995-04-02' };
// const paul = buildPerson(obj);
// console.log({ paul });

// https://www.npmjs.com/package/uuid --> genera identificadores

module.exports = {
  buildMakePerson,
};
