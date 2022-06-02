 //Funciones para sortear el orden
export const listAZ = (movie) => { //ordena de la AZ
  let orderAZ = movie.sort((a, b) => (a.title > b.title) ? 1 :-1);
    return orderAZ;
}

export const listZA = (movie) => { //ordena de la ZA
  let orderZA = movie.sort((a, b) => (a.title < b.title) ? 1 :-1);
    return orderZA;
}
  
  

// //Filtrar por genero
// export const genderFilter = (character) =>{
//   const gender = character.filter((obj) => {
//     obj.gender === string;
//   });
// return gender;
// };