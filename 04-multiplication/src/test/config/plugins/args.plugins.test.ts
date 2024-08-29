// import { yarg } from '../../../config/plugins/args.plugins';

const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];
  const { yarg } = await import('../../../config/plugins/args.plugins');
  return yarg;
};

describe('pruebas sobre args.plugins.ts ', () => {
  const originalArgv = process.argv;
  beforeEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });

  test('debe de devolver los valores por defecto', async () => {
    const yargs = await runCommand(['-b', '5']);
    // console.log(yargs);
    // que contenga esots elementos en el objeto
    expect(yargs).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        s: false,
        n: 'multiplication-Table',
        d: 'outputs',
      })
    );
  });

  test('debe de devolver los valores definidos', async () => {
    const yargArgs = await runCommand([
      '-b',
      '12',
      '-s',
      '-l',
      '50',
      '-n',
      'tablePrameter',
      '-d',
      'outputs2',
    ]);
    // console.log({ yargArgs });
    // que contenga esots elementos en el objeto
    expect(yargArgs).toEqual(
      expect.objectContaining({
        b: 12,
        l: 50,
        s: true,
        n: 'tablePrameter',
        d: 'outputs2',
      })
    );
  });
});
