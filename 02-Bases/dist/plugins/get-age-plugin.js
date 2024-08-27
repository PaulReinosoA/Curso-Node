"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
// const getAgePlugin = require('get-age');
const moment_1 = __importDefault(require("moment"));
const getAge = (birthdate) => {
    if (!birthdate)
        return new Error('la fecha es requerida');
    const age = (0, moment_1.default)().diff(birthdate, 'years');
    // return getAge(birthday);
    console.log(typeof age);
    return typeof age === 'number' ? age : 0;
};
exports.getAge = getAge;
// module.exports = { getAge };
