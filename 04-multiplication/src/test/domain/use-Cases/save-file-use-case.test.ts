import { SaveFile } from '../../../domain/use-Cases/save-file-use-case';
import * as fs from 'fs';

describe('pruebas sobre save-file-use-case.ts', () => {
  const customOptions = {
    fileContent: 'custom test content',
    destination: 'outputs',
    fileName: 'testFile',
  };

  afterEach(() => {
    // const outputFolderExists = fs.existsSync('outputs');
    // if (outputFolderExists) fs.rmSync('outputs', { recursive: true });

    // const customOutputFolderExists = fs.existsSync(customOptions.destination);
    // if (customOutputFolderExists)
    //   fs.rmSync(customOptions.destination, { recursive: true });
  });

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

  test('debde de retornar error al crear el archivo', () => {
    const saveFile = new SaveFile();
    const options = {
      fileContent: 'custom test content',
      destination: 'outputs',
      fileName: 'testFile',
    };
    const mkdirSyncSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(()=>{
      throw new Error('error al crear archivo');
    });

    const result = saveFile.execute(options);
    expect(result).toBeFalsy();

    mkdirSyncSpy.mockRestore();
  });

  test('debde de retornar false al intentar guardar el archivo', () => {

    const saveFile = new SaveFile();    
    const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(()=>{
      throw new Error('error al crear archivo');
    });


    const result = saveFile.execute({ fileContent: 'hola' });
    expect(result).toBeFalsy();

    writeFileSpy.mockRestore();
  });
});
