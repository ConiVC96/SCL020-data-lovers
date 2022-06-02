import { listZA,listAZ } from './data.js';
import data from './data/ghibli/ghibli.js';

//Accediendo a la Data
const ghibli = data.films; //data de ghibli
const top1 = ghibli[2];
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
moviesTop5();


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
        console.log(movie);
    };
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

//console.log(listAZ(ghibli));



// Elegir género
let genderOrder= document.getElementById("gender");
genderOrder.addEventListener('change',  (e) => {
    let userSelect = e.target.value;
    emptyCard();
    if (userSelect == "Female") { // Ordena de A a Z
        let characterGender = genderFilter(ghibli);
        tarjetaPersonajes(characterGender);
        return
    } else if (userSelect == "Male") { // Ordena de Z a A
        let characterGender = genderFilter(ghibli);
        tarjetaPersonajes(characterGender);
        return
    } else if (userSelect == "NA") { // Ordena de Z a A
            let characterGender = genderFilter(ghibli);
            tarjetaPersonajes(characterGender);
            return
    } else {
        return userSelect == "All";
    }
});



// Tarjetita de personaje segun ej coach
function tarjetaPersonajes (elemento){
    console.log(elemento);
    let tarjetita = `<div> 
        <h5>${elemento.title}</h5>
        <p>${elemento.description}</p>
        <p>${elemento["people"]
        .map((people) => {
          return `<li>${people}</li>`;
        })}</p>
    </div>`
    return tarjetita;
}



function verPersonajes (peli){
 let  todasLasPelis = "";
 peli.forEach((elemento) => todasLasPelis += tarjetaPersonajes(elemento));
return todasLasPelis;
}



console.log(genderFilter(ghibli));

console.log(verPersonajes(ghibli));
