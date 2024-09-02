export enum LogSeverityLevel {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export class LogEntity {
  public level: LogSeverityLevel;
  public message: string;
  public createdAt: Date;

  constructor(message: string, level: LogSeverityLevel) {
    this.message = message;
    this.level = level;
    this.createdAt = new Date();
  }

  //* static me permite llamar a este metodo sin instanciar la clase!!
  static fromJson = (json: string): LogEntity => {
    const { level, message, createdAt } = JSON.parse(json);
    if (!message) throw new Error('message not exist');
    const log = new LogEntity(level, message);
    log.createdAt = new Date(createdAt);
    return log;
  };
}
