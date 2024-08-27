import * as fs from 'fs';

export interface SaveFileOpcions {
  fileContent: string;
  destination?: string;
  fileName?: string;
}

export interface SaveFileUseCase {
  // hacemos que implemente la clase
  execute: (options: SaveFileOpcions) => boolean;
}

export class SaveFile implements SaveFileUseCase {
  constructor /*
    sotorage repository
    */() {}

  execute({
    fileContent,
    destination: fileDestination = 'outputs',
    fileName = 'table',
  }: SaveFileOpcions): boolean {
    try {
      if (!fs.existsSync(fileDestination)) fs.mkdirSync(fileDestination);
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
      return true;
    } catch (error) {
      return false;
    }
  }
}
