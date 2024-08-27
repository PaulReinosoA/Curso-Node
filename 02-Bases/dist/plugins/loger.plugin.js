"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLogger = exports.logger = void 0;
//* https://www.npmjs.com/package/winston/  --> sitio para gestor de logs
// const winston = require('winston');
const winston_1 = __importDefault(require("winston"));
const { combine, timestamp, json } = winston_1.default.format;
exports.logger = winston_1.default.createLogger({
    level: 'info',
    format: combine(timestamp(), json()),
    // defaultMeta: { service: 'user-service' },
    transports: [
        // - Escribe todos los registros con un nivel de importancia de `error` o menor en `error.log`
        // - Escribe todos los registros con un nivel de importancia de `info` o menor en `combined.log`
        new winston_1.default.transports.File({ filename: 'error.log', level: 'error' }),
        new winston_1.default.transports.File({ filename: 'combined.log' }),
    ],
});
//
// Si no estamos en producción, entonces inicie sesión en la `consola` con el formato:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    exports.logger.add(new winston_1.default.transports.Console({
        format: winston_1.default.format.simple(),
    }));
}
// factory function:
const buildLogger = (service) => {
    return {
        log: (message) => {
            exports.logger.log('info', { message, service });
        },
        error: (message) => {
            exports.logger.log('error', { message, service });
        },
    };
};
exports.buildLogger = buildLogger;
