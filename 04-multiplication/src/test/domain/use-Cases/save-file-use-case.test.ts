import { SaveFile } from '../../../domain/use-Cases/save-file-use-case';
import * as fs from 'fs';

describe('pruebas sobre save-file-use-case.ts', () => {
  //   beforeEach(() => {
  //     if (fs.existsSync('outputs/'))
  //       fs.rmdirSync('outputs/', { recursive: true });
  //   });

  //   afterEach(() => {
  //     if (fs.existsSync('outputs/'))
  //       fs.rmdirSync('outputs/', { recursive: true });
  //   });

  test('debe de guardar el archivo con los valores por defecto', () => {
    const saveFile = new SaveFile();
    const pathFileTets = 'outputs/table.txt';
    const options = {
      fileContent: 'test content' /*, destination: '', fileName: ''*/,
    };

    const result = saveFile.execute(options);
    const checkFile = fs.existsSync(pathFileTets);
    const checkContent = fs.readFileSync(pathFileTets, { encoding: 'utf-8' });

    expect(saveFile).toBeInstanceOf(SaveFile);
    expect(result).toBeTruthy();
    expect(checkContent).toBe(options.fileContent);
    expect(checkFile).toBeTruthy();
  });

  test('debe de guardar el archivo con los custom values', () => {
    const saveFile = new SaveFile();

    const options = {
      fileContent: 'custom test content',
      destination: 'outputs',
      fileName: 'testFile',
    };

    const pathFileTets = `${options.destination}/${options.fileName}.txt`;

    const result = saveFile.execute(options);
    const checkFile = fs.existsSync(pathFileTets);
    const checkContent = fs.readFileSync(pathFileTets, {
      encoding: 'utf-8',
    });

    expect(saveFile).toBeInstanceOf(SaveFile);
    expect(result).toBeTruthy();
    expect(checkContent).toBe(options.fileContent);
    expect(checkFile).toBeTruthy();
  });

  test('debde de retornar error al crwar el archivo', () => {
    const saveFile = new SaveFile();
    const options = {
      fileContent: 'custom test content',
      destination: 'outputs',
      fileName: 'testFile',
    };
    const mkdirSyncSpy = jest
      .spyOn(fs, 'mkdirSync')
      .mockImplementation(() => {
        throw new Error('error al crear archivo');
      });

    const result = saveFile.execute(options);
    expect(result).toBeFalsy();

    mkdirSyncSpy.mockRestore();
  });
});
