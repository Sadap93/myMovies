import MovieList from "./components/MovieList";
import "./styles/Movie.css";
import NewMovie from "./components/NewMovie/NewMovie";
import { MoviesArray } from "./MoviesArray";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(MoviesArray);

  const addMovieHandler = (movie) => {
    setMovies((prevMovies) => {
      return [movie, ...prevMovies];
    });
  };

  return (
    <div className="wrapper">
      <NewMovie onAddMovie={addMovieHandler}/>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
