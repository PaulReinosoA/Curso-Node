import { LogDataSource } from '../../domain/dataSources/log.dataSource';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';
import { LogRepository } from '../../domain/repository/log.repository';

// solamnente recive un dataSource y los llama a los metodos del datasource
// la razon de ser es que, podamos cambiar por cualquier otro datasource(DB,FILES.ETC) que tenga los 2 metodos definidos:

export class LogRepositoryImplementation implements LogRepository {
  constructor(private readonly logDataSource: LogDataSource) {}

  saveLog(log: LogEntity): Promise<void> {
    return this.logDataSource.saveLog(log);
  }
  getLog(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    return this.logDataSource.getLog(severityLevel);
  }
}
