import { envs } from '../src/config/envs';
import { Server } from '../src/presentation/server';

(async () => {
  main();
})();

function main() {
  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
  });

  server.start();
}
