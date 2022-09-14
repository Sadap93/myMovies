import Movie from "./Movie";
import { MoviesArray } from "../MoviesArray";

const MovieList = () => {
  
  return MoviesArray.map((movie, index) => (
    <Movie movie={movie} key={`movie-${index}`} />
  ));
};

export default MovieList;
