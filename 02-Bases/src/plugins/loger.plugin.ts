//* https://www.npmjs.com/package/winston/  --> sitio para gestor de logs
// const winston = require('winston');
import winston from 'winston';

const { combine, timestamp, json } = winston.format;

export const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(), json()),
  // defaultMeta: { service: 'user-service' },
  transports: [
    // - Escribe todos los registros con un nivel de importancia de `error` o menor en `error.log`
    // - Escribe todos los registros con un nivel de importancia de `info` o menor en `combined.log`

    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

//
// Si no estamos en producción, entonces inicie sesión en la `consola` con el formato:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

// factory function:
export const buildLogger = (service: string ) => {
  return {
    log: (message: string) => {
      logger.log('info', { message, service });
    },
    error: (message: string) => {
      logger.log('error', { message, service });
    },
  };
};
