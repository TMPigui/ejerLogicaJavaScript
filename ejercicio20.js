/*Dadas dos cadenas de texto, crear un algoritmo que compruebe si son anagramas entre si
ejemplos
anagramas("riesgo", "Sergio") // devuelve : true
anagramas("victor", "robles") // devuelve : false
*/

function limpiarTexto(texto){

   return texto 
         .replace(/[^\w]/gi, '')    //me reempaza gi de manera global, y ^\w significa todo lo que no sea letras 
         .toLowerCase()             //me los pone todos en minusculas
         .split('')                 //me lo separa todos de forma de arreglo
         .sort()                    //me los ordena alfabeticamente
         .join('')
}

function anagramas(texto1,texto2){

   return limpiarTexto(texto1) === limpiarTexto(texto2)
}

console.log(anagramas("HOLA","HELLO"));



