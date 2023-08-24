/*Dado array de numeros, devolvere el array sin elementos duplicados. si hay un string eliminarlo del array */

function eliminarDuplicados(elementos){

    elementos = elementos.filter(elemento =>{
        return typeof elemento === 'number';
        
    });

    //new set: metodo js que me borra los duplicados, pero no me lo deja en arreglo sino en objeto
    let sinDuplicados = new Set(elementos);
    
    //metodo js que me convierte cualquier texto en arreglo
    return Array.from(sinDuplicados);

    
}

console.log(eliminarDuplicados(["uno",5,2,5,2,6]))