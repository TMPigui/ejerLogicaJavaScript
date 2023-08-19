/*Dado una cadena de texto y numero, recortar el string mostrando los x primeros caracteres. */
//funcion mia
function recortar(texto, numero){

    textoLimpio = texto
                    .replace(/[^\w]/gi, '')
                    .split('')
                    
    //el slice lo que hace es que inicia en 0 y extraemos el numero 
    for(const caracter of textoLimpio.slice(0,numero)){
        console.log(caracter)
    }

}

recortar("hola aaam sms msm helo ",5);


//funcion profesor
function recortar(texto, hasta){
    let resultado = "";

    if(typeof texto === 'string' && typeof hasta === 'number'){
        //funciona parecido al slice que usamos ariba el .substring le decimos que desde 0 hasta donde le indiquemos
        resultado = texto.substring(0,hasta)
    }else{
        resultado = "Introduce bien los datos ome sapo perro";
    }

    return resultado;
}

console.log(recortar("Hola a todos",6))
