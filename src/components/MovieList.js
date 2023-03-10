import React from "react";
import Movie from "./Movie";


const MovieList = ({movies}) => {

    const movieNodes = movies.map((movie) => {
        return <Movie name={movie.name} url={movie.url} key={movie.id}/>
    })

    return (
        <div>
        {movieNodes}
        </div>
    )
};

export default MovieList