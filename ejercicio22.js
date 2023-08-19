/*Dsdo dos numero devolver cual es mayor y cual es menor */

function mayorMenor(num1,num2){

    let resultado = "";

    if(num1 === num2){
        resultado = "Los numero son iguales"
    }else if(num1 > num2){
        resultado = `El numero mayor es ${num1}\n`;
        resultado += `El numero menor es ${num2}`;
    }else if(num2 > num1){
        resultado = `El numero mayor es ${num2}\n`;
        resultado += `El numero menor es ${num1}`;
    }else{
        resultado = "Datos erroneos por favor agrega numeros validos"
    }

    return resultado
}

console.log(mayorMenor(200,900));