/*Dado un numero mostar todos sus divisores*/

function divisor(numero, posibleDivision){

    if(numero % posibleDivision === 0 ){
        return posibleDivision;
    }
    return 0;
}

//mostar todos los divisores desde 1 hasta el numero introducido
function mostrarDivisores(numero){
    for(let i = 1; i <= numero; i++){
        //llamamos la otra funcion, le pasamos el numero y la i que es el numero que estamos rrecoriendo
        let esDivisor = divisor(numero, i);

        if(esDivisor) console.log(esDivisor);    
    }
}

mostrarDivisores(20);