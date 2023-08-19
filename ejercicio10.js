/*Pedir un numero y que con -  hacer una escalera*/

function escalera(numero) {
    let escaleraCompleta = "";

    for (let nivel = 1; nivel <= numero; nivel++) {

        let escalones = "";

        for (let escalon = 1; escalon <= nivel; escalon++) {
            escalones += "[-]";
        }
       //Esto esta bien pero no debe ser porconsola si no por string pasamos a sumarsela a escalera completa y le damos el salto
       // console.log(`Nivel : ${nivel} ${escalones}`)
        escaleraCompleta += escalones + '\n';
    }

    return escaleraCompleta;
}

console.log(escalera(5));