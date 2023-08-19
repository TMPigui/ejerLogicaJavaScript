/*Cuanto es el X por ciento de X numero? */
function porcentaje(porcentaje, numero){
    let porcentajeAplicar = (numero* (porcentaje/100))
    console.log(`El  ${porcentaje}% de ${numero} es: ${porcentajeAplicar}`)
}

porcentaje(12,487);