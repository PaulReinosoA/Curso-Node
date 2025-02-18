"use strict";
// const axios = require('axios');
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHttpClientPlugin = void 0;
const axios_1 = __importDefault(require("axios"));
exports.getHttpClientPlugin = {
    get: (url) => __awaiter(void 0, void 0, void 0, function* () {
        const resp = yield axios_1.default.get(url);
        // const resp = await fetch(url);
        // const data = await resp.json();
        return resp;
    }),
    post: (url) => __awaiter(void 0, void 0, void 0, function* () { }),
    put: (url) => __awaiter(void 0, void 0, void 0, function* () { }),
    delete: (url) => __awaiter(void 0, void 0, void 0, function* () { }),
};
// module.exports = { http: getHttpClientPlugin };
