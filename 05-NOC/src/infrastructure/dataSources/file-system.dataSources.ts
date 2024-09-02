import { LogDataSource } from '../../domain/dataSources/log.dataSource';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';
import * as fs from 'fs';

//* en infrastructure vamos a agregar las implementacions del dominio
// aqui llego directmente a la BD o archivos etc..

export class FileSystemDataSource implements LogDataSource {
  private readonly logPath = 'logs/'; //por que no queremos que cambie
  private readonly allLogsPath = 'logs/logs-all.log';
  private readonly mediumLogsPath = 'logs/logs-medium.log';
  private readonly highLogPath = 'logs/logs-high.log';

  constructor() {
    this.createLogsFiles();
  }

  private createLogsFiles = () => {
    if (!fs.existsSync(this.logPath)) {
      fs.mkdirSync(this.logPath);
    }

    [this.allLogsPath, this.mediumLogsPath, this.highLogPath].forEach(
      (path) => {
        if (fs.existsSync(path)) return;
        fs.writeFileSync(path, '');
      }
    );
  };

  async saveLog(newLog: LogEntity): Promise<void> {
    const logAsJson = `${JSON.stringify(newLog)}\n`;

    fs.appendFileSync(this.allLogsPath, logAsJson);

    if (newLog.level === LogSeverityLevel.low) return;

    if (newLog.level === LogSeverityLevel.medium) {
      fs.appendFileSync(this.mediumLogsPath, logAsJson);
    } else {
      fs.appendFileSync(this.highLogPath, logAsJson);
    }
  }

  private getLogsProfile = (path: string): LogEntity[] => {
    const content = fs.readFileSync(path, 'utf-8');

    const stringLogs = content.split('\n').map((log) => {
      return LogEntity.fromJson(log);
    });

    return stringLogs;
  };

  async getLog(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    switch (severityLevel) {
      case LogSeverityLevel.low:
        return this.getLogsProfile(this.allLogsPath);
      case LogSeverityLevel.high:
        return this.getLogsProfile(this.highLogPath);
      case LogSeverityLevel.medium:
        return this.getLogsProfile(this.mediumLogsPath);
      default:
        throw new Error(`${severityLevel} not implemented`);
    }
  }
}
