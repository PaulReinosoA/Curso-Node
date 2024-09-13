import express from 'express';

interface ServerOptions {
  readonly port: number;
  readonly public_path: string;
}

export class Server {
  constructor(options: ServerOptions) {}

  private app = express();

  start() {
    this.app.use(express.static('public'));

    this.app.listen(3000, () => {
      console.log('start');
    });
  }
}
