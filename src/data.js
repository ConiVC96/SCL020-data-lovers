
 //Funciones para sortear el orden
export const listAZ = (movie) => { //ordena de la AZ
  let orderAZ = movie.sort((a, b) => (a.title > b.title) ? 1 :-1);
    return orderAZ;
}

export const listZA = (movie) => { //ordena de la ZA
  let orderZA = movie.sort((a, b) => (a.title < b.title) ? 1 :-1);
    return orderZA;
}
  


//Filtrar por genero
export const genderFilter = (movies, gender) =>{
  console.log(movies);
  const characters = movies.forEach((movie)=> {
    
    let allChara = movie.people;
    
    let filterChara = allChara.filter((character)=> character.gender == gender)
    console.log(filterChara);
  });
return characters;
};



