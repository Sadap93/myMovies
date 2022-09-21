import React, { useState } from "react";
import Movie from "./Movie";
import MovieFilter from "./MovieFilter";

const MovieList = ({ movies }) => {
  const [filteredGenre, setFilteredGenre] = useState("all");

  const filterChangeHandler = (selectedGenre) => {
    setFilteredGenre(selectedGenre);
  };

  const filteredMovie = movies.filter((movie) => {
    if (filteredGenre === "all") {
      return movie;
    }
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
