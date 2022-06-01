//Filtrar peliculas por titulo
export const moviesZAfilter = (movie, string) => {
  let ordenZA = movie.sort((a, b) => ((a.title < b.title) ? 1 :-1));
  if (string === 'A-Z') {
    console-log(ordenZA)
    //return ordenZA;
  }
  if (string === 'Z-A') {
    return ordenZA.reverse();
  }
  console.log(ordenZA);
  //return  ordenZA;
}
  
  
  // export const moviesAZfilter = (movie) => {
  //   let ordenAZ = movie.sort((a, b) => (a.title > b.title) ? 1 :-1);

  //   return ordenAZ;
  //   }


//Filtrar por genero
export const genderFilter = (character) =>{
  const gender = character.filter((obj) => {
    obj.gender === string;
  });
return gender;
};