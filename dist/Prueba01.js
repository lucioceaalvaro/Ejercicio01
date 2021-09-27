"use strict";
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
const entradaTeclado_1 = require("./Util/entradaTeclado");
//Creamos la variable funcion main que llamamos main
//Funcion async nos permite usar el await(Esperar) si no no funciona
//DECLARACIONES
let main = () => __awaiter(void 0, void 0, void 0, function* () {
    //Pregunta "valor es la variable"
    const valor = yield (0, entradaTeclado_1.leerTeclado)('Dime algo');
    //Sacar por terminal llamar a una variable ${variable}
    console.log(`Me has dicho: ${valor}`);
});
//Invocamos a la funcion
//INVOCACIONES
main();
console.log("Hola mundo");
