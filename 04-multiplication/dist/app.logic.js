"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = `C:/Users/Washington.Reinoso/Documents/GitHub/Curso-Node/04-multiplication/outputs`;
const escribirCabecera = (numero) => {
    const cabecera = `
  =======================================
              Tabla del ${numero} 
  =======================================\n`;
    fs.writeFile(path + `/tabla-${numero}.txt`, cabecera, (err) => {
        if (err) {
            console.error('error al escribir', err);
        }
        else {
            // file written successfully
            console.log(cabecera);
        }
    });
};
const agregarLineaTabla = (content, numero) => {
    fs.appendFile(path + `/tabla-${numero}.txt`, content, (err) => {
        if (err) {
            console.error('error al agregar', err);
        }
        else {
            // file written successfully
            console.log(content);
        }
    });
};
const llenararchivo = (numero) => __awaiter(void 0, void 0, void 0, function* () {
    let mensaje = '';
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
    yield escribirCabecera(numero);
    for (let index = 1; index <= 10; index++) {
        mensaje += `${index} * ${numero} = ${numero * index}  \n`;
    }
    yield agregarLineaTabla(mensaje, numero);
});
llenararchivo(5);
