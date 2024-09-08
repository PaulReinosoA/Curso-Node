import { LogEntity, LogSeverityLevel } from '../../entities/log.entity';
import { LogRepository } from '../../repository/log.repository';

interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}
// para que bsean opcionales usmaos-->  | undefined
type SuccessCallback = (() => void) | undefined;
type ErrorCallback = ((error: string) => void) | undefined;

export class CheckService implements CheckServiceUseCase {
  constructor(
    private readonly logRepository: LogRepository,
    private readonly successCallback: SuccessCallback,
    private readonly errorCallback: ErrorCallback
  ) {}

  public async execute(url: string): Promise<boolean> {
    try {
      const respuesta = await fetch(url);
      if (!respuesta.ok) throw new Error(`error en servicio: ${url}`);
      // console.log(`${url} is ok`);

      const log = new LogEntity({
        message: `Service ${url}, working`,
        level: LogSeverityLevel.low,
        origin: 'checkServices.ts',
      });
      this.logRepository.saveLog(log);
      this.successCallback && this.successCallback();
      return true;
    } catch (error) {
      // console.log(`CheckService/fetch: ${url} : ${error}`);
      const errorMessage = `CheckService: ${url} is not ok!, ${error}`;
      const log = new LogEntity({
        message: errorMessage,
        level: LogSeverityLevel.high,
        origin: 'checkServices.ts',
      });
      this.logRepository.saveLog(log);

      this.errorCallback &&
        this.errorCallback(`CheckService: ${url} is not ok! : ${errorMessage}`);
      return false;
    }
  }
}

// npm i json-server --> servicis de api --> https://www.npmjs.com/package/json-server
// monatmos un servidor para hahcer prototipos o purebas crud rapido
// para probar
