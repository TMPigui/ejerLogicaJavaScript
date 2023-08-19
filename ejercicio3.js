/*Dada una palabra buscarla en una frase y devolver cunatas veces aparece cierta palabra  y la palabra debe ser parametro de una funcion */

function coincidencias(frase, busqueda) {
    //Lo hacemos para que la frase quede de la manera mas limpia
    let texto_limpo = frase.toLowerCase().replace(/[.,¡!]/gi, "") //me reemplaza todo lo que agregue dentro de las llavex por lo que tengo dentro de las comillas en este caso nada
    //valor a pasar si no encontramos nada
    let resultado = 0;


    //includes busca lo que esta incluido por parametros
    if (texto_limpo.includes(busqueda)) {
        let palabras = texto_limpo.split(" ");
        let mapa = {};

        for (let palabra of palabras){
            if (mapa[palabra]){
                mapa[palabra]++;
            }else {
                mapa[palabra] = 1;
            }
        }
        resultado = mapa[busqueda];
    } else {
        resultado = 0;
    }
    return resultado;
}

console.log("Numero de coincidencias en la frase", coincidencias("Hola, soy, tu, victor mejor. victor amigo! chpame! victor,.", "caballo"))