/*Dado un numero sacar su factorial */

function factorial(numero){
    let resultado = 1;

    for(i = 1; i <= numero; i++){
        resultado *= i;
    }
    return resultado;
}

console.log(factorial(5));