import MovieList from "./components/MovieList";
import "./styles/Movie.css";
import NewMovie from "./components/NewMovie/NewMovie";
import { MoviesArray } from "./MoviesArray";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(MoviesArray);

  return (
    <div className="wrapper">
      <NewMovie  setMovies={setMovies}/>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
