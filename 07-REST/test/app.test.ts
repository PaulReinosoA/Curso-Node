import { env } from 'process';
import { Server } from '../src/presentation/server';
import { envs } from '../src/config/envs';

jest.mock('../src/presentation/server.ts');

describe('test en App.ts', () => {
  test('should call be server with arguments and start', async () => {
    await import('../src/app');
    expect(Server).toHaveBeenCalledTimes(1);
    expect(Server).toHaveBeenCalledWith({
      port: envs.PORT,
      public_path: envs.PUBLIC_PATH,
      routes: expect.any(Function),
    });
    expect(Server.prototype.start).toHaveBeenCalled();
  });

  test('should first', () => {

    

  });
});
 