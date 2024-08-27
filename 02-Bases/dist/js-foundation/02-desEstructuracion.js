"use strict";
// // corre en toda la app de node --> .env
// console.log(process.env);
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = void 0;
// const {
//   USERDNSDOMAIN,
//   USERNAME,
//   TERM_PROGRAM_VERSION,
//   TERM_PROGRAM,
//   USERPROFILE,
// } = process.env;
// console.log({
//   USERDNSDOMAIN,
//   USERNAME,
//   TERM_PROGRAM_VERSION,
//   TERM_PROGRAM,
//   USERPROFILE,
// });
// console.table({
//   USERDNSDOMAIN,
//   USERNAME,
//   TERM_PROGRAM_VERSION,
//   TERM_PROGRAM,
//   USERPROFILE,
// });
// const characters = ['flash', 'batman', 'superman'];
// const [_, __, batman] = characters;
// console.log(batman);
// console.log( process.env );
const { SHELL, HOMEBREW_PREFIX, npm_lifecycle_script } = process.env;
// console.table({ SHELL, HOMEBREW_PREFIX, npm_lifecycle_script });
exports.characters = ['Flash', 'Superman', 'Green Lantern', 'Batman'];
const [, , , batman] = exports.characters;
// console.log(batman);
