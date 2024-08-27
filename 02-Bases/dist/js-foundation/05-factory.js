"use strict";
// const { getUid, getAge } = require('../plugins');
// import { getAge, getUid } from '../plugins/';
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ getAgeD, getUidD, }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUidD(),
            name,
            birthdate,
            age: getAgeD(birthdate),
        };
    };
};
exports.buildMakePerson = buildMakePerson;
// const obj = { name: 'Paul', birthdate: '1995-04-02' };
// const paul = buildPerson(obj);
// console.log({ paul });
// https://www.npmjs.com/package/uuid --> genera identificadores
// module.exports = {
//   buildMakePerson,
// };
