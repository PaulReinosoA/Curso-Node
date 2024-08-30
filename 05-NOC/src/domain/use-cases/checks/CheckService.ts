interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckService implements CheckServiceUseCase {
  constructor(
    private readonly successCallback: SuccessCallback,
    private readonly errorCallback: ErrorCallback
  ) {}

  public async execute(url: string): Promise<boolean> {
    try {
      const respuesta = await fetch(url);
      if (!respuesta.ok) throw new Error(`error en servicio: ${url}`);
      // console.log(`${url} is ok`);
      this.successCallback();
      return true;
    } catch (error) {
      // console.log(`CheckService/fetch: ${url} : ${error}`);
      this.errorCallback(`CheckService/fetch: ${url} : ${error}`);
      return false;
    }
  }
}

// npm i json-server --> servicis de api --> https://www.npmjs.com/package/json-server
// monatmos un servidor para hahcer prototipos o purebas crud rapido
// para probar
