import React from "react";
import MovieForm from "./MovieForm";

const NewMovie = ({ setMovies }) => {
  const addMovieHandler = (movie) => {
    setMovies((prevMovies) => {
      return [...prevMovies, movie];
    });
  };

  return <MovieForm addMovieHandler={addMovieHandler} />;
};

export default NewMovie;
