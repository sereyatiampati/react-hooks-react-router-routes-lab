import React from "react";
import { directors } from "../data";

function Directors() {
  console.log(directors)
  const directorList= directors.map((director, index)=>{
    const directorMoviesList=director.movies.map((movie, indx)=> <li key={indx}>{movie}</li> )
    return (
      <div key={index}>
        <p>{director.name}</p>
        <ul>{directorMoviesList}</ul>
      </div>
    )
  })
  return <div>
    <h1>Directors Page</h1>
    {directorList}
  </div>;
}

export default Directors;
