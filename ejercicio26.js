/*Dado un numero mostar su serie fibonacci */

function fibonacci(numero){

    let serie = [0,1];
    
    for(let i = 2; i <= numero; i++){
        
        serie.push(serie[i - 1 ] + serie[i - 2]);
    }

    return [serie, serie[numero]];
}

console.log("serie completa: ", fibonacci(20)[0]);
console.log("El resultado fib: ", fibonacci(20)[1]);


function fib(numeroFib){

    let serieB = [0,1];

    for(let ii = 2; ii <= numeroFib; ii++){
        serieB.push(serieB[ii - 1] + serieB[ii - 2]);
    }

    return [serieB, serieB[numeroFib]];
}

console.log("Serie fib: ", fib(10)[0]);
console.log("Serie fib: ", fib(10)[1]);
