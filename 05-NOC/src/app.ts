import { Server } from '../src/presentation/server';

(async () => {
  await main(); //la ventaja es qeu podemos hacer que espere el await con la funcion autoinvocada
})();

function main() {
  Server.start();
}
