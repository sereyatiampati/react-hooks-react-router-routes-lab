import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesList= movies.map((movie,index)=>{
    const genresList=movie.genres.map((genre, indx)=><li key={indx}>{genre}</li>)
    return <div key={index}>
      <h3>{movie.title}</h3>
      <p>Time: {movie.time}</p>
      <ul>{genresList}</ul>
    </div>
  })
  return <div>
    <h1> Movies Page</h1>
    {moviesList}
  </div>
}

export default Movies;
