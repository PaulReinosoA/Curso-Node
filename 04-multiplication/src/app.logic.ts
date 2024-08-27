import * as fs from 'fs';
import { yarg } from './config/plugins/args.plugins';

const { b:base, l:limit, s:showTable } = yarg;

const path: string = `C:/Users/Washington.Reinoso/Documents/GitHub/Curso-Node/04-multiplication/outputs`;

const escribirCabecera = (numero: number) => {
  const cabecera: string = `
  =======================================
              Tabla del ${numero} 
  =======================================\n`;

  fs.writeFile(path + `/tabla-${numero}.txt`, cabecera, (err) => {
    if (err) {
      console.error('error al escribir', err);
    } else {
      // file written successfully
      if (showTable) console.log(cabecera);
    }
  });
};

const agregarLineaTabla = (content: string, numero: number) => {
  fs.appendFile(path + `/tabla-${numero}.txt`, content, (err) => {
    if (err) {
      console.error('error al agregar', err);
    } else {
      // file written successfully
      if (showTable) console.log(content);
    }
  });
};

const llenararchivo = async (numero: number) => {
  let mensaje: string = '';
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }

  await escribirCabecera(numero);

  for (let index = 1; index <= limit; index++) {
    mensaje += `${index} * ${numero} = ${numero * index}  \n`;
  }
  await agregarLineaTabla(mensaje, numero);
};

// ejecucion del script
// npx ts-node ./src/app.logic.ts -b=12 -s -l=50
llenararchivo(base);
