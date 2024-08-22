"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeroById = void 0;
const heros_1 = require("../data/heros");
const getHeroById = (id) => {
    return heros_1.heros.find((hero) => hero.id === id);
};
exports.getHeroById = getHeroById;
