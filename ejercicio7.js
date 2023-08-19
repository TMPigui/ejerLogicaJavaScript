/*Dado 2 numeros devolver cuantos numeros impares hay entre ellos */

function impares(numero1, numero2) {
    let contador = 0;

    while (numero1 < numero2) {
        if (numero1 % 2 !== 0) contador++;
        numero1++;
    }
    return contador;
}

console.log(impares(1, 50))