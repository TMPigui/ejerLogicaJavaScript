/*Ddo un texto y una busqueda censurar todas las coincidencias de la busqueda en el texto con [-CENSURADO-]*/

function censurado(texto = false, busqueda = false) {
    let respuesta = "";

    if (!texto && !busqueda) {
        respuesta = "No se puede leer ni texto ni busquedad";
    } else if (texto && !busqueda) {
        respuesta = "No se puede leer la busquedad";
    } else if (!texto && busqueda) {
        respuesta = "No se puede leer el texto";
    }
    //para reemplazar solo es con .replace
    else if (texto && busqueda) {
        //asi me da pero solo me censura la primera palabra porque el replace no es de forma global
        //respuesta = texto.replace(busqueda, "[Censurado]");
        //si lo deseo hacer de forma global debo hacer una exprecion regular
        //gi quiere decir de manera global y sin importar mayus y mins
        respuesta = texto.replace(new RegExp(busqueda, 'gi'), "[CENSURADO]");
    }

    return respuesta
}

console.log(censurado("Hola a todos Como estas muy bien como estan muy bien comomamas de bien ", "como"))