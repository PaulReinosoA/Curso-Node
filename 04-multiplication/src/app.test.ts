import { ServerApp } from '../src/presentation/server-app';

describe('pruebas sobre app.test.ts', () => {
  test('deb de', async () => {
    const serverAppMock = jest.fn();
    ServerApp.run = serverAppMock;
    process.argv = [
      '-b',
      '12',
      '-s',
      '-l',
      '20',
      '-n',
      'tableTest',
      '-d',
      'outputs-destination',
    ];

    await import('./app');

    expect(serverAppMock).toHaveBeenCalledWith({})
  });
});
