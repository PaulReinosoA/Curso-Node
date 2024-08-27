import { ServerApp } from './presentation/server-app';
import { yarg } from './config/plugins/args.plugins';

//* funcion anonima autoinvocada asyncrona:

(async () => {
  await main();
  console.log('fin programa');
})();

async function main() {
  // console.log('main ejecution');
  const { b: base, l: limit, s: showTable } = yarg;

  ServerApp.run({ base, limit, showTable });
}
