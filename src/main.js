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

// cargar todos los poster al cargar la página
window.addEventListener("load", () => { 
    posterCard(ghibli);
});


console.log(listAZ(ghibli));
console.log(ghibli);
console.log(nameZA);
console.log(prueba1);






// function tarjetaPeliculas (titulo){
//     console.log(titulo);
//     return `<div> 
//         <h5>${titulo.title}</h5>
//         <p>${titulo.description}</p>
//         <p>${titulo["people"]
//         .map((people) => {
//           return `<li>${people}</li>`;
//         })}</p>
       
//     </div>`
// }



// function verPeliculas (peli){
//  let  todasLasPelis = "";
//  peli.forEach((titulo) => todasLasPelis += tarjetaPeliculas(titulo));
// return todasLasPelis;
// }

/*
document.getElementById("orderAZ").addEventListener("change", (event)=>{
    let userSelect = (event.target.value);

    if (userSelect == "A-Z") {
        let orderSelectAZ = moviesAZfilter(ghibli);
        let cardAZ = document.getElementById("prueba");
        cardAZ.innerHTML = orderSelectAZ;
    } else if ( userSelect == "Z-A"){
        let orderSelectZA = moviesZAfilter(ghibli);
    }
}) */

// let cardGhibli = document.getElementById("prueba");
// const alfabeticOrder = document.querySelector('#orderAZ');
// alfabeticOrder.addEventListener('change', (event) => {
//   cardGhibli.innerHTML = '';
//   verPeliculas(moviesZAfilter(ghibli, alfabeticOrder.target.value));
// });


//console.log(genderFilter(ghibli));

//console.log(verPeliculas(ghibli));
