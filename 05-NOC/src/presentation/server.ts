import { CronService } from './cron/cronService';
import { CheckService } from '../domain/use-cases/checks/CheckService';
import { LogRepositoryImplementation } from '../infrastructure/repositories/log.repository.impl';
import { FileSystemDataSource } from '../infrastructure/dataSources/file-system.dataSources';

// Creo la instancia para enviar a todos los use cases que deban usar ese datasource
// aqui es donde agrego mis origenes de datos ejmpl: FileSystemLogRepository
const FileSystemLogRepository = new LogRepositoryImplementation(
  new FileSystemDataSource()
);
// puede tambien llamarse de esta manera por los valores opcionales!
// CheckService(FileSystemLogRepository,undefined,undefined)

export class Server {
  /**
   * start
   */
  public static start() {
    CronService.createJob('*/5 * * * * *', () => {
      const url = 'https://google.com';
      new CheckService(
        FileSystemLogRepository,
        // inyeccion de dependencias
        () => console.log(`${url}, is ok`),
        (error) => console.log(error)
      ).execute(url);

      // new CheckService().execute('http://localhost:3000');
    });
  }
}
