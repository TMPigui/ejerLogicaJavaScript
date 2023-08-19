/*Dado 2 arrays devolver un array con solo los elementos comunes entre ambos*/
//creamos la funcion le pasamos dos arrays
function elementosComunes(array1, array2) {
    // Usamos el método 'filter' para crear un nuevo arreglo que contiene elementos de 'array1'
    // que también están presentes en 'array2'
    const filtrado = array1.filter(elemento => {
        // La función de filtro se aplica a cada elemento en 'array1'
        // La función 'includes' verifica si el 'elemento' actual está presente en 'array2'
        return array2.includes(elemento);
    });
    return filtrado
}

console.log(elementosComunes([1, 3, 4, 5], [10, 3, 4, 20]))
console.log(elementosComunes(["santi", "dani"], ["dani", "celes"]))
