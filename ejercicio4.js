/*Dada una cadena de texto, darle la vuelta e invertir el orden de sus caractes, sin usar metodos propios del lenguaje, solo estructuras de control */

function textoInvertir(texto) {
    let invertido = "";

    // in me da la ubicacion de 0 a 3 en est caso
    // of me rrecorre es las letras 
    for (let letra of texto) {
        //guardamos las letras en la variable invertido
        invertido = letra + invertido;
    }
    return invertido;
}
console.log("Texto invertido ", textoInvertir("Hola santiago como estas"));


function invertirConMetodo(texto2) {
    return texto2.split("").reverse().join("");
}
console.log("Texto invertido ", invertirConMetodo("Hola santiago como estas"));

