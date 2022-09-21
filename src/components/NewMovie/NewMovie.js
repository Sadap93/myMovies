import React from "react";
import MovieForm from "./MovieForm";

const NewMovie = ({ onAddMovie }) => {
  const saveMovieDataHandler = (enteredMovieData) => {
    const movieData = {
      ...enteredMovieData,
      id: Math.random().toString(),
    };
    onAddMovie(movieData);
  };
  return <MovieForm onSaveMovieData={saveMovieDataHandler}/>;
};

export default NewMovie;
