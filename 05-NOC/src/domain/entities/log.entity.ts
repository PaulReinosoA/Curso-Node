export enum LogSeverityLevel {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export interface LogEntityOprtions {
  level: LogSeverityLevel; //Enum
  message: string;
  createdAt?: Date;
  origin: string;
}

export class LogEntity {
  public level: LogSeverityLevel; //Enum
  public message: string;
  public createdAt: Date;
  public origin: string;

  constructor(options: LogEntityOprtions) {
    const { level, message, createdAt = new Date(), origin } = options;
    this.message = message;
    this.level = level;
    this.createdAt = createdAt;
    this.origin = origin;
  }

  //* static me permite llamar a este metodo sin instanciar la clase!!
  static fromJson = (json: string): LogEntity => {
    const { level, message, createdAt, origin } = JSON.parse(json);
    if (!message) throw new Error('message not exist');
    const log = new LogEntity({
      message,
      level,
      createdAt,
      origin,
    });
    log.createdAt = new Date(createdAt);
    return log;
  };
}
