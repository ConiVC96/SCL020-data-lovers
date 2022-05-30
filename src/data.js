
//Filtrar peliculas por titulo
export const moviesFilter = (movie) => {
  let ordenAZ = movie.sort((a, b) => (a.title < b.title) ? 1 :-1);
  return ordenAZ;
  }
  

//Filtrar por genero
export const genderFilter = (character) =>{
  const gender = character.filter((obj) => {
    obj.gender === "Male" || obj.gender === "Female" || obj.gender === "NA";
  });
return gender;
};

