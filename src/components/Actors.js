import React from "react";
import { actors } from "../data";

function Actors() {
  console.log(actors)
  const actorList= actors.map((actor, index)=>{
    const actorMovies=actor.movies.map((movie, indx)=><li key={indx}>{movie}</li>)
    return <div key={index}>
      <p>{actor.name}</p>
      <ul>{actorMovies}</ul>

    </div>
  })
  return <div>
    <h1>Actors Page</h1>
    {actorList}
  </div>;
}

export default Actors;
