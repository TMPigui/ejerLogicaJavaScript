/*Dado un numero entero, inviertelo y devuelve de nuevo el entero */

function numeroEntero(numero){

    let numeroInvertidoString = numero
                                    .toString() //lo pasamos a string primero
                                    .split("") //lo convertimos un arreglo
                                    .reverse() //le damos la vuelta 
                                    .join(""); //Y por ultimo los volvemos a juntar

    //lo pasamos de string a entero otra vez
    //aca el math.sing es para saber si el numero que le pasamos en + o - y que asi me devuelva bien el resultado
    let numeroInvertidoInt = parseInt(numeroInvertidoString) * Math.sign(numero);

    //typof para mirar que tipo es si es string o number
    return numeroInvertidoInt;
}

console.log(numeroEntero(16))