import { Server } from '../src/presentation/server';
import { envs } from './config/plugins/envs.plugin';

(async () => {
  await main(); //la ventaja es qeu podemos hacer que espere el await con la funcion autoinvocada
})();

function main() {
   Server.start();
  //console.log(envs);
}
