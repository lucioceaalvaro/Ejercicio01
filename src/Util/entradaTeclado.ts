// https://nodejs.org/dist./v4.8.3/doc/api/readline.html
import readline from 'readline'
let readlineI: readline.Interface

//Variable que se le asigna una funcion con la "Variable=>Funcion{}"
let leeLinea = (prompt:string) => {
    readlineI = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise<string>( (resuelta: any, rechazada: any) => {
        //Marco de la pregunta 
        readlineI.question(`${prompt}: `, (cadenaEntrada: string) => {
            resuelta (cadenaEntrada)
            }
        )
    })
}
export let leerTeclado = async (prompt:string) => {
    let valor: string
    valor =await leeLinea(prompt)
    readlineI.close()
    return valor
}