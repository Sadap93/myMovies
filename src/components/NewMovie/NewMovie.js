import React from "react";
import MovieForm from "./MovieForm";

const NewMovie = ({ setMovies }) => {
  const addMovieHandler = (movie) => {
    setMovies((prevMovies) => {
      return [movie, ...prevMovies];
    });
  };

  return <MovieForm addMovieHandler={addMovieHandler} />;
};

export default NewMovie;
