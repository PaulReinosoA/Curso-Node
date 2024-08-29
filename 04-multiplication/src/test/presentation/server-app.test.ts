import { CreateTable } from '../../domain/use-Cases/create-table-use-case';
import { SaveFile } from '../../domain/use-Cases/save-file-use-case';
import { ServerApp } from '../../presentation/server-app';

describe('pruebas sobre server-app.ts', () => {
  const serverApp = new ServerApp();

  const options = {
    base: 5,
    limit: 10,
    showTable: false,
    name: 'multiplication-Table',
    destination: 'outputs',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debe ejecutar el run popr defecto', () => {
    expect(serverApp).toBeInstanceOf(ServerApp);
    expect(typeof ServerApp.run).toBe('function');
  });

  test('debe ejecutar el run de serverApp con las opciones', () => {
    const logSpy = jest.spyOn(console, 'log');

    const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');

    const saveSpy = jest.spyOn(SaveFile.prototype, 'execute');

    ServerApp.run(options);

    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenCalledWith('Server corriendo...');

    expect(createTableSpy).toHaveBeenCalledTimes(1);
    expect(createTableSpy).toHaveBeenCalledWith({ base: 5, limit: 10 });

    expect(saveSpy).toHaveBeenCalledTimes(1);
    expect(saveSpy).toHaveBeenCalledWith({
      destination: 'outputs',
      fileContent: expect.any(String),
      fileName: 'multiplication-Table-5',
    });
  });

  test('should be call with custome values', () => {
    const logMock = jest.fn();
    const logErrorMock = jest.fn();
    const createMock = jest.fn().mockReturnValue('1 * 2 = 2');
    const saveMock = jest.fn();

    console.log = logMock;
    console.error = logErrorMock;
    CreateTable.prototype.execute = createMock;
    SaveFile.prototype.execute = saveMock;

    ServerApp.run(options);

    expect(logMock).toHaveBeenCalledWith('Server corriendo...');
    expect(createMock).toHaveBeenCalledWith({
      base: options.base,
      limit: options.limit,
    });
    expect(saveMock).toHaveBeenCalledWith({
      destination: options.destination,
      fileContent: '1 * 2 = 2',
      fileName: options.name + `-${options.base}`,
    });
  });
});
