// abstrac es para que nadie cree instncias de esta clase abstracta
//* const logDataSource = new LogDataSource(); --> esto no se puede hacer!!! y el abstarc lo define
// cualquier clase que implemente el log Data source debe tener los que defino aqui

import { LogEntity, LogSeverityLevel } from '../entities/log.entity';

// qui pondremos los origenes de datos!!
// implementacion de reglas de negocio todos los datasources debe complir esto!
export abstract class LogDataSource {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLog(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}
