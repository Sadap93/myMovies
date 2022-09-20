import React, { useState } from "react";
import Movie from "./Movie";
import MovieFilter from "./MovieFilter";
import { MoviesArray } from "../MoviesArray";

const MovieList = () => {
  const [filteredGenre, setFilteredGenre] = useState();

  const filterChangeHandler = (selectedGenre) => {
    setFilteredGenre(selectedGenre);
  };

  const filteredMovie = MoviesArray.filter((movie) => {
    return movie.genre === filteredGenre;
  });
  return (
    <>
      <MovieFilter
        onChangeFilter={filterChangeHandler}
        selectedGenre={filteredGenre}
      />
      {filteredMovie.map((movie, index) => (
        <Movie movie={movie} key={`movie-${index}`} />
      ))}
    </>
  );
};

export default MovieList;
