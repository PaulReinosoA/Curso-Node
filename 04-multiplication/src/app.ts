import { ServerApp } from './presentation/server-app';
import { yarg } from './config/plugins/args.plugins';

//* funcion anonima autoinvocada asyncrona:

(async () => {
  await main();
  console.log('fin programa');
})();

async function main() {
  // console.log('main ejecution');
  const { b: base, l: limit, s: showTable, n: name, d: destination } = yarg;

  ServerApp.run({ base, limit, showTable, name, destination });
}

// ejecucion
//* npx ts-node src/app.ts -b=12 -s -l=50 -n=tablePrameter -d=outputs2
