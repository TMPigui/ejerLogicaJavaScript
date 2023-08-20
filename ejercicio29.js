/*Dada un numero, indicar si es numero capicua o no, los numeros capicua se leen igual de izquierda a derecha y viceverza

ejemplo: 
capi(2002) = true
capi(2014) = false
*/


function capi(numero){

    numeroInverso = parseInt(numero.toString().split('').reverse().join(''));
    
    return numero === numeroInverso;
}

console.log(capi(10));