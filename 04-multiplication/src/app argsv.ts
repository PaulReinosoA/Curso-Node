// console.log(process.env);

//* argumentos de la ejecucion del script
console.log({ argv: process.argv });

//! envian parametros a node:
//* node dist/app.js --base 10 -l=100 --file=hola.txt --file2="nuevo mensaje" -s
//--> --base -->bandera
//--> 10  -->numero
//--> -l=100 -->bandera numerica
//--> --file=hola.txt  -->bandera con texto
//--> --file2="nuevo mensaje" -->bandera con texto espaciado
//--> -s valor boleando

// const [tsNode, app, ...args] = process.argv;
// console.log(args);

//* ayuda a tomar los args del script de node
// npm i yargs -->para version 17 --> npm i yargs@17.7.2

import { yarg } from './config/plugins/args.plugins';

// esto ya nos regresa los args pero como un arreglo de clave valor
console.log({ yarg });

console.log({ b: yarg.b ,base: yarg.base });

//* funcion anonima autoinvocada asyncrona:

(async () => {
  await main();
  console.log('fin programa');
})();

async function main() {
  console.log('main ejecution');
}
