import { CronService } from './cron/cronService';
import { CheckService } from '../domain/use-cases/checks/CheckService';
import { LogRepositoryImplementation } from '../infrastructure/repositories/log.repository.impl';
import { FileSystemDataSource } from '../infrastructure/dataSources/file-system.dataSources';
import { envs } from '../config/plugins/envs.plugin';
import { EmilService } from './email/email.service';
import { SendEmailLogs } from '../domain/use-cases/email/send-email-logs';
import { MongoLogDataSource } from '../infrastructure/dataSources/mongo-datasource';
import { PostgresLogDataSource } from '../infrastructure/dataSources/postgres-log-dataSource';

// Creo la instancia para enviar a todos los use cases que deban usar ese datasource
// aqui es donde agrego mis origenes de datos ejmpl: FileSystemLogRepository(renombramos)logRepository
const logRepository = new LogRepositoryImplementation(
  //new FileSystemDataSource()
  //new MongoLogDataSource()
  new PostgresLogDataSource()
);
// puede tambien llamarse de esta manera por los valores opcionales!
// CheckService(FileSystemLogRepository,undefined,undefined)

export class Server {
  /**
   * start
   */
  public static start() {
    // console.log('inicio start envio emil', {
    //   MAILER_EMAIL: envs.MAILER_EMAIL,
    //   PassEMAIL: envs.MAILER_SECRET_KEY,
    // });

    // instancia para enviar correo!!
    const emailService = new EmilService();

    // // envio simple
    // emailService.sendEmail({
    //   to: 'paulreinosoares463@outlook.com',
    //   subject: 'Log de sistema',
    //   htmlBody: `
    //   <h3>Log del sistema - NOC</h3>
    //   <p>loreimpsun prueba de emil enviado desde mi app de noc loreimpsun</p>
    //   <p>ver logs adjuntos</p>
    //   `,
    // });

    // // enviar correo!! nuevo con adjuntos"!!!!
    //emailService.sendEmilWithFileSystemsLog(['paulreinosoares463@outlook.com','nicol.ont20@gmail.com']);

    // envio de correo pero con caso de uso:

    // new SendEmailLogs(emailService, fileSystemLogRepository).execute([
    //   'paulreinosoares463@outlook.com',
    //   //'nicol.ont20@gmail.com',
    // ]);

    //funcionalidad  ciclica
    CronService.createJob('*/5 * * * * *', () => {
      const url = 'https://google.com';
      new CheckService(
        logRepository,
        // inyeccion de dependencias
        () => console.log(`${url}, is ok`),
        (error) => console.log(error)
      ).execute(url);

      // new CheckService().execute('http://localhost:3000');
    });

    //conectando con mongo
  }
}
