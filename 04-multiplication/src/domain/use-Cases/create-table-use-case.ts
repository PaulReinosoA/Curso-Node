export interface CreateTableOpcions {
  base: number;
  limit?: number;
}

export interface CreateTableUseCase {
  // hacemos que implemente la clase
  execute: (options: CreateTableOpcions) => string;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {
    /*
    DI : depndence injection
    que hara basado en dependencias extermnas
    */
  }

  execute({ base, limit = 10 }: CreateTableOpcions) {
    let outputMessage = '';
    const cabecera: string = `
    =======================================
                Tabla del ${base} 
    =======================================\n`;
    outputMessage += cabecera;
    for (let index = 1; index <= limit; index++) {
      outputMessage += `${index} * ${base} = ${base * index}  \n`;
    }
    return outputMessage;
  }
}
