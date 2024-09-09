import { LogModel } from '../../data/mongo';
import { LogDataSource } from '../../domain/dataSources/log.dataSource';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

export class MongoLogDataSource implements LogDataSource {
  constructor() {}
  async saveLog(log: LogEntity): Promise<void> {
    const newLog = await LogModel.create(log);
    console.log('Mongo log created:', newLog.id);
  }

  async getLog(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    const logs = await LogModel.find({ level: severityLevel });
    // mapeamos nuestro modelo de mongo a nuestra interfaz!
    // retornmos el nuevo arreglo mapeado!!
    return logs.map(mongoLog => LogEntity.fromObject(mongoLog));
  }
}
