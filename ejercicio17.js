/*Dado un numero, mostar los numeros  de 1 hasta el numero.
pero para multiplos del 3 imprimir "Buzz" en lugar del numero
y para los multiplos del 5 "Lightyear"
y para multiplos de 3 y 5 imprimir BuzzLightyear */


function buzz(numero){
    let resultado = 0;

    if(numero % 3 === 0 && numero % 5 === 0){
        resultado = "BuzzLightyer";

    }else if(numero % 3 === 0){
        resultado = "Buzz";

    }else if(numero % 5 === 0){
        resultado = "Lightyear";

    }else{
        return numero;
    }

    return resultado;
}

//console.log(buzz(3));


function imprimir(numero){
    for(let i = 1; i <= numero; i++){
        console.log(buzz(i))
    }
}

imprimir(30)