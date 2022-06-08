
import { listZA, listAZ, genderFilter} from './data.js';
import data from './data/ghibli/ghibli.js';


//Accediendo a la Data

const ghibli = data.films; //data de ghibli

/*const top1 = ghibli[1];
const top2 = ghibli[3];
const top3 = ghibli[10];
const top4 = ghibli[12];
const top5 = ghibli[8];


console.log(ghibli);
let ghibliTop5 = [top1, top2, top3, top4, top5];
console.log(ghibliTop5);

//Funcion que cargue el Top5
const moviesTop5 = () => {
    let arraytop5 = window.addEventListener("load", () => { 
        posterCard(ghibliTop5);  
    })
    return arraytop5;
} 
moviesTop5();*/



// cargar todos los poster al cargar la página
window.addEventListener("load", () => { 
    posterCard(ghibli);
});

// Función para limpiar, tarjeta vacia
const emptyCard = () => { 
    document.getElementById("Prueba").innerHTML = "";
}

let empty = document.getElementById("Prueba");

//Crear Tarjetita
const posterCard = (movie) => { //Funcion para mostrar tarjetitas
    for (let i = 0; i < movie.length; ++i) {
        let cardMovie = `<section class="containerCard">
        <section class="moviesCard">
        <h2> ${movie[i].title} </h2>
        <!--<div><p>${movie[i].description}</p></div> -->
        <img class="imgCard" src="${movie[i].poster}">
        </section>
        </section>`;
        empty.innerHTML += cardMovie;

       // console.log(movie);
    }

}


//Elegir de la A-Z y de la Z-A
let alfabeticOrder = document.getElementById("orderAZ");
alfabeticOrder.addEventListener('change',  (e) => {
    let userSelect = e.target.value;
    emptyCard();
        if (userSelect == "A-Z") { // Ordena de A a Z
            let orderA = listAZ(ghibli);
            posterCard(orderA);
            return
        } else if (userSelect == "Z-A") { // Ordena de Z a A
            let orderZ = listZA(ghibli);
            posterCard(orderZ);
            return
        } else {
            alert("No es una opción valida");
        }


});


//tarjetitas de personaje
const characterCard = (movie) => { //Funcion para mostrar tarjetitas
    for (let i = 0; i < movie.length; ++i) {
        let cardMovie = `<section class="containerCard">
        <section class="moviesCard">
        <h2> ${movie[i].name} </h2>
        <div><p>${movie[i].gender}</p></div>
        <div><p>${movie[i].specie}</p></div>
        <img class="imgCard" src="${movie[i].img}">
        </section>
        </section>`;
        empty.innerHTML += cardMovie;
        console.log(movie);
    }
}



// Elegir género
let genderOrder= document.getElementById("gender");
genderOrder.addEventListener('change',  (e) => {
    let userSelect = e.target.value;
    emptyCard()
    if (userSelect == "Female") { // Seleccciona femenino
        let characterGender = genderFilter(ghibli, userSelect);
        characterCard(characterGender);
 console.log(characterGender);
    } else if (userSelect == "Male") { // Selecciona masculino
        let characterGender = genderFilter(ghibli, userSelect);
        characterCard(characterGender);
        return
    } else if (userSelect == "NA") { // selecciona NA
            let characterGender = genderFilter(ghibli, userSelect);
            characterCard(characterGender);
            return
    } else {
        return userSelect == "All";
    }
});

