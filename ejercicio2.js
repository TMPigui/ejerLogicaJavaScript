//dado una cadena de texto saber si es palindromo o no 

function palindromo(texto){
    //split mesepara la palabra en una array de letras
    let invertido = texto
                        .split('') //me separa las letras del texto en array
                        .reverse() //Me pone la letras que separe en un orden invertido
                        .join('') //me junta las letras
    return(invertido === texto);

    /*if(texto === invertido){
        console.log(`La palabra ${texto} es un palindromo`)
    }else{
        console.log(`La palabra ${texto} no es un palindromo`)
    }*/
}

console.log(`Es un palindrom? ${palindromo("oto")} `);


function pruebaTecnica(texto){
    let pruebaInvertida = texto.split('').reverse().join('  ')

    console.log(pruebaInvertida)
}

pruebaTecnica("hola")