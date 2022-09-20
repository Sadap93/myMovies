import MovieList from "./components/MovieList";
import "./styles/Movie.css";
import NewMovie from "./components/NewMovie/NewMovie";

function App() {
  return (
    <div className="wrapper">
      <NewMovie />
      <MovieList />
    </div>
  );
}

export default App;
