import { leerTeclado } from "./Util/entradaTeclado";

//Creamos la variable funcion main que llamamos main
//Funcion async nos permite usar el await(Esperar) si no no funciona

//DECLARACIONES
let main = async () => {

    //Pregunta "valor es la variable"
    const valor = await leerTeclado('Dime algo')
    //Sacar por terminal llamar a una variable ${variable}
    console.log(`Me has dicho: ${valor}`)
}
//Invocamos a la funcion

//INVOCACIONES
main();
console.log("Hola mundo")