/*Dado un numero, mostrar a cuantos años, meses y dias eequivalen*/

function calcularDias(dias){
    //mathfloor me redondea
    let anos = Math.floor(dias / 365);

    //sacamos el restante que me queda de la divicion de arriva
    let diasRestantes = dias % 365; 

    let meses = Math.floor(diasRestantes / 30);

    //para sacar el restante de los dias 
    diasRestantes = diasRestantes%30;

    return(`Tendrias ${anos} años y ${meses} meses y ${diasRestantes} dias`);

}

console.log(calcularDias(8200))