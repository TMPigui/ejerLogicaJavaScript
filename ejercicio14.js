/*Dado un string y un numero repetir el string tantas veces como el numero indique */

function repetirString(texto, numero){

    let resultado = "";

    for(let i = 0; i < numero; i++){
        resultado += texto + `\n`;
    }

    return resultado;    
}

console.log(repetirString("victor", 8))

