/*Dado un numero mostrar todos los numeros desde ese
 al 0 de 8 en 8 
 en una lista con guines donde cada numero
debe empezar por n°*/

function hastaCero(numero){

    let resultado = `--- Del ${numero} al 0 ---\n`;

    while(numero > 0){
        resultado += `-n° ${numero} \n`;
        numero -= 8;
    }

    if(numero <= 0){
        resultado += "-n° 0 \n";
    }

    resultado += "---FIN---";
    return resultado;    
}
console.log(hastaCero(80))