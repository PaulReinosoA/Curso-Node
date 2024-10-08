import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';
import { Attachment } from 'nodemailer/lib/mailer';
import { LogRepository } from '../../domain/repository/log.repository';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

interface SendMailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachment[];
}

export class EmilService {
  constructor(
  ) {}

  private transportes = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    },
  });

  async sendEmail(options: SendMailOptions): Promise<boolean> {
    const { to, subject, htmlBody, attachments = [] } = options;
    try {
      const sentInformation = await this.transportes.sendMail({
        to,
        subject,
        html: htmlBody,
        attachments,
      });

      //console.log({ sentInformation });
      const log = new LogEntity({
        level: LogSeverityLevel.low,
        message: 'Email sent',
        origin: 'email.service.ts',
      });
      

      return true;
    } catch (error) {
      console.log({ error });
      const log = new LogEntity({
        level: LogSeverityLevel.high,
        message: 'Email was not sent',
        origin: 'email.service.ts',
      });
      
      return false;
    }
  }

  async sendEmilWithFileSystemsLog(to: string | string[]) {
    const subject = ' Log del Servidor';
    const htmlBody = `
      <h3>Log del sistema - NOC</h3>
      <p>loreimpsun prueba de emil enviado desde mi app de noc loreimpsun</p>
      <p>ver logs adjuntos</p>
      `;
    const attachments: Attachment[] = [
      {
        filename: 'logs-all.log',
        path: './logs/logs-all.log',
      },
      {
        filename: 'logs-high.log',
        path: './logs/logs-high.log',
      },
      {
        filename: 'logs-medium.log',
        path: './logs/logs-medium.log',
      },
    ];

    return this.sendEmail({ to, subject, attachments, htmlBody });
  }
}
