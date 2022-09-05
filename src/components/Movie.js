import '../styles/Movie.css'

const Movie = ({ movie }) => {
  return (
    <div className='card'>
      <img src={movie.picture} className='poster'></img>
      <div className='movie-data'>
        <div className='movie-title'>{movie.title}</div>
        <div className='movie-relaseDate'>{movie.relaseDate}</div>
        <div className='movie-genre'>{movie.genre}</div>
        <div className='movie-imdbScore'>{movie.imdbScore}</div>
      </div>
    </div>
  );
};

export default Movie;
