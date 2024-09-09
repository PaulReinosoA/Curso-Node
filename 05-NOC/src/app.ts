import { Server } from '../src/presentation/server';
import { envs } from './config/plugins/envs.plugin';
import { LogModel } from './data/mongo';
import { MongoDataBase } from './data/mongo/init';

(async () => {
  await main(); //la ventaja es qeu podemos hacer que espere el await con la funcion autoinvocada
})();

async function main() {
  await MongoDataBase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  // Graba registro:
  // const newLog = await LogModel.create({
  //   message: 'Test message desde mongo',
  //   origin: 'app.ts',
  //   level: 'low',
  // });

  // await newLog.save();
  // console.log(newLog);

  // Busco registro:
  // const logs = await LogModel.find();
  // console.log({ logs });
  // console.log(logs[1].message);

  // Server.start();
  //console.log(envs);
}
