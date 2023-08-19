/*Dada una cadena de texto devover cuantas vocales tiene esa cadena */

function vocalesEncontrar(texto){

    let vocales = "";

    for(let vocal of texto){
        let exprecionRegular = /[a,e,i,o,u]/g;
        let found = vocal.match(exprecionRegular);
        found == exprecionRegular ++
        console.log(found)
    }
}
vocalesEncontrar("Hoaola")


function vocales(texto){
    //exprecion regular que me permite de manera gi(global) filtrar slo lo que este alli 
    let coincidencias = texto.match(/[aeiou]/gi);

    return coincidencias ? coincidencias.length : 0;
}

console.log("Numero de vocales", vocales("santiagosuarez"));