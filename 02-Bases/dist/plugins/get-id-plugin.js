"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUid = void 0;
// const { v4: uuidv4 } = require('uuid');
const crypto_1 = __importDefault(require("crypto"));
const getUid = () => {
    // return uuidv4();
    return crypto_1.default.randomUUID();
};
exports.getUid = getUid;
// module.exports = { getUid };
