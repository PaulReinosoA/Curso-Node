import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

//* parseSync --> para no recibir la promesa y hacerlo de forma sincrona
// export const yarg = yargs(process.argv).parseSync();

//* hideBin envia solo los parametros de forma corta
// export const yarg = yargs(hideBin(process.argv)).parseSync();

// agrega opciones a los argumentos de entrada del script
export const yarg = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'multiplication table base',
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'multiplication table limit',
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'show multiplication table',
  })
  .check((argv, options) => {
    // console.log({argv, options})
    if (argv.b < 1) throw new Error('la base debe ser mayor a 0');
    return true;
  })
  .parseSync();
