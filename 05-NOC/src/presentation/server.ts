import { CronService } from './cron/cronService';
import { CheckService } from '../domain/use-cases/checks/CheckService';

export class Server {
  /**
   * start
   */
  public static start() {
    CronService.createJob('*/5 * * * * *', () => {
      const url = 'https://google.com';
      new CheckService(
        // inyeccion de dependencias
        () => console.log(`${url}, is ok`),
        (error) => console.log(error)
      ).execute(url);

      // new CheckService().execute('http://localhost:3000');
    });
  }
}
