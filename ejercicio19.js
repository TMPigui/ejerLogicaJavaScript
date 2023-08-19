/*Dado un array de objetos de peliculas (titulo,director,vista)mostrar todas las peliculas indicando cual has visto y cual no*/

function misPeliculas(peliculas){
    for(pelicula of peliculas){
       let paraMostrar = `"${pelicula.title} de ${pelicula.director}"`;

       if(pelicula.vista){
        console.log("Ya has visto ", paraMostrar)
       }else{
        console.log("No has visto ", paraMostrar)

       }
    }
    return peliculas;
}

const coleccionDePeliculas = [
    {
        title: "El señor de los anillos",
        director: "Peter Jackson",
        vista: true
    },
    {
        title: "La liga de la justicia",
        director: "Zack Snyder",
        vista: false
    }, {
        title: "Los vengadores endgame",
        director: "Joe russo",
        vista: true
    }, {
        title: "Batman vs superman",
        director: "Zack Snyder",
        vista: false
    },

];


console.log(misPeliculas(coleccionDePeliculas));

