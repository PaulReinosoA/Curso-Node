"use strict";
// const { emailTemplate } = require('../js-foundation/01-template');
// require('../js-foundation/02-desEstructuracion');
// const { getUserById } = require('../js-foundation/03-callbacks');
// console.log(emailTemplate);
// const { getUserById } = require('../js-foundation/04-arrows');
Object.defineProperty(exports, "__esModule", { value: true });
// const id = 1;
// getUserById(id, (error, user) => {
//   if (error) throw new Error(error);
//   console.log(user);
// });
//* EJEMPLO DE  FACTORY : NO TRABAJO CON DEPENDENCIAS DE PRPOPIOS Y TERCEROS
//const { buildMakePerson } = require('../js-foundation/05-factory');
const _05_factory_1 = require("./js-foundation/05-factory");
const plugins_1 = require("./plugins");
// const { getUid, getAge } = require('../plugins');
const makePerson = (0, _05_factory_1.buildMakePerson)({ getUidD: plugins_1.getUid, getAgeD: plugins_1.getAge });
const paul = makePerson({ name: 'Paul', birthdate: new Date('1995-04-02') });
console.log(paul);
//* ejemplo de llamaod con await
// const { getPokemonById } = require('../js-foundation/06-promesas');
//getPokemonById(1)
//   .then((pokemon) => console.log({ pokemon }))
//   .catch((error) => console.log({ error }))
//   .finally(() => console.log('finalmente'));
//* ejemplo de llamada con patron wraper
// const { getPokemonById } = require('../js-foundation/06-promesas');
// getPokemonById(4)
//   .then( ( pokemon ) => console.log({ pokemon }) )
//   .catch( ( err ) => console.log( err ) )
//   .finally( () => console.log('Finalmente') );
const { buildLogger } = require('./plugins');
const logger = buildLogger('app.js');
logger.log('hola mundo');
logger.error('esto es algo malo');
console.log('hola mundo');
