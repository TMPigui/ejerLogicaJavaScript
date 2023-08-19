/*Dado un string ponerlo completo en mayusculas o minusculas dependiendo de cual
hayan mas si hay mas mayus etonces todo mayus y si no caso contrario */


function convertidor(texto){

    let mayusculas = 0;
    let minusculas = 0;
    let resultado = "";

    for(letra of texto){
        //metodo test para que todas las letras de la A a la Z en mayusculas que esten
        if(/[A-Z]/.test(letra)){
            mayusculas++;
        }else{
            minusculas++;
        }
    }

    if(mayusculas > minusculas){
        resultado = texto.toUpperCase();
    }else{
        resultado = texto.toLowerCase();
    }

    return resultado;
}


console.log(convertidor("HOLAATodos"));