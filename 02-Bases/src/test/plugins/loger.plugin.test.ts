import {
  buildLogger,
  logger as winstonLogger,
} from '../../plugins/loger.plugin';
describe('pruebas sobre loger.plugin.ts', () => {
  test('  debe de retornar las funciones de loger ', () => {
    const loger = buildLogger('test');
    expect(typeof loger.error).toBe('function');
    expect(typeof loger.log).toBe('function');
  });

  test('loger.log deb devolver un mensje de Log', () => {
    const winstonLogerMock = jest.spyOn(winstonLogger, 'log');
    const message = 'test  message';
    const service = 'test  service';

    const loger = buildLogger(service);
    loger.log(message);
    expect(winstonLogerMock).toHaveBeenCalledWith(
      'info',
      expect.objectContaining({
        level: 'info',
        message: 'test  message',
        service: 'test  service',
      })
    );
  });
});
