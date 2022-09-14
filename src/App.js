import MovieList from "./components/MovieList";
import "./styles/Movie.css";
import MovieFilter from "./components/MovieFilter";
import NewMovie from "./components/NewMovie/NewMovie";

function App() {


  return (
    <div className="wrapper">
      <NewMovie />
      <MovieFilter />
      <MovieList />
    </div>
  );
}

export default App;
