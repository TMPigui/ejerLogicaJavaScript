/*Dada una cadena de texto devollver el caracert mas usado */

function masUsado(texto) {

    let mapeoLetras = {};
    let maximoRepeticiones = 0;
    let letraMasRepetida = "";

    for (let letra of texto) {
        //si en mapeo letras si no existe lo qu ehacemos es añadir a mapeo esa letra y inicializamos contador
        if (!mapeoLetras[letra]) {
            mapeoLetras[letra] = 1;
        } else {
            mapeoLetras[letra]++;
        }
    }

    for (let letra in mapeoLetras) {

        if (mapeoLetras[letra].toString().trim().length === 1 && mapeoLetras[letra] > maximoRepeticiones) {
            maximoRepeticiones = mapeoLetras[letra];
            letraMasRepetida = letra;
        }
    }

    console.log(mapeoLetras)
    return letraMasRepetida;

}

console.log("La letra mas repetida es: ", masUsado("cuandocomocamaron"));