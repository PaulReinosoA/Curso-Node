// esta clase va a orkestar como funciona la app de entrada

import { CreateTable } from '../domain/use-Cases/create-table-use-case';
import { SaveFile } from '../domain/use-Cases/save-file-use-case';

interface RunOption {
  base: number;
  limit: number;
  showTable: boolean;
  name: string;
  destination: string;
}

export class ServerApp {
  // static --> hace que no necesite inicializar la clase
  static run({ base, limit, showTable, name, destination }: RunOption) {
    console.log('Server corriendo...');
    const table = new CreateTable().execute({ base, limit });
    const fileWasCreated = new SaveFile().execute({
      fileContent: table,
      fileName: `${name}-${base}`,
      destination,
    });

    if (showTable) console.log(table);

    fileWasCreated
      ? console.log('el archivo fue creado exitosamente')
      : console.error('No se creo el archivo');
  }
}
