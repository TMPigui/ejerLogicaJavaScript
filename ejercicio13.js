/*Dado un array dividirlo en tantos sub arrays como sea necesario basados en un numero que indique su tamaño*/

function divideArray(arregloPrincipal, numeroElementos){

    let arreglos = [];
    
    for(let elemento of arregloPrincipal){
        //con el -1 porque el inidice inicia en 0
        let ultimo = arreglos[arreglos.length - 1]
        
        if(!ultimo || ultimo.length === numeroElementos){
            arreglos.push([elemento]);
        }else{
            ultimo.push(elemento)
        }
    }
    return arreglos;

}

console.log(divideArray([7,5,9,1,22,8,10,9,20,4,5],3));