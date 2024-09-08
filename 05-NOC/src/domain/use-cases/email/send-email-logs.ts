import { EmilService } from '../../../presentation/email/email.service';
import { LogEntity, LogSeverityLevel } from '../../entities/log.entity';
import { LogRepository } from '../../repository/log.repository';

interface sendLogEmailUseCase {
  execute: (to: string | string[]) => Promise<boolean>;
}

export class SendEmailLogs implements sendLogEmailUseCase {
  constructor(
    //* Inyecto la dependencia para guardar en el repositorio 
    //* si se envia o no el email!! --> Aqui uso mi DATASOURCE al llamar la clase en RUN!!!

    private readonly emailService: EmilService,
    private readonly logRepository: LogRepository
  ) {}

  async execute(to: string | string[]) {
    try {
      const sent = this.emailService.sendEmilWithFileSystemsLog(to);
      if (!sent) {
        throw new Error('Email log not sent');
      }

      const log = new LogEntity({
        message: 'Email sent succesfull',
        level: LogSeverityLevel.low,
        origin: 'end-email-logs.ts',
      });
      this.logRepository.saveLog(log);

      return true;
    } catch (error) {
      const log = new LogEntity({
        message: `${error}`,
        level: LogSeverityLevel.high,
        origin: 'send-email-logs.ts',
      });
      this.logRepository.saveLog(log);
      return false;
    }
  }
}
