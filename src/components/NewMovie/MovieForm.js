import React, { useState } from "react";
import "./MovieForm.css";

const MovieForm = ({ onSaveMovieData }) => {
  const [enteredMovieTitle, setEnteredMovieTitle] = useState("");
  const [enteredMovieDate, setEnteredMovieDate] = useState("");
  const [enteredMovieGenre, setEnteredMovieGenre] = useState("");
  const [enteredMovieScore, setEnteredMovieScore] = useState("");
  const [enteredMoviePicture, setEnteredMoviePicture] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredMovieTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredMovieDate(event.target.value);
  };

  const genreChangeHandler = (event) => {
    setEnteredMovieGenre(event.target.value);
  };

  const scoreChangeHandler = (event) => {
    setEnteredMovieScore(event.target.value);
  };

  const pictureChangeHandler = (event) => {
    setEnteredMoviePicture(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const movieData = {
      title: enteredMovieTitle,
      genre: enteredMovieGenre,
      relaseDate: new Date(enteredMovieDate),
      imdbScore: enteredMovieScore,
      picture: enteredMoviePicture,
    };
    {
      onSaveMovieData(movieData);
    }
    setEnteredMovieTitle("");
    setEnteredMovieDate("");
    setEnteredMovieGenre("");
    setEnteredMovieScore("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-movie__controls">
        <div className="new-movie__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredMovieTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-movie__control">
          <label>Relase Date</label>
          <input
            type="date"
            min="1888-01-01"
            max="2100-12-31"
            value={enteredMovieDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="new-movie__control">
          <label>Genre</label>
          <select value={enteredMovieGenre} onChange={genreChangeHandler}>
            <option value="drama">drama</option>
            <option value="comedy">comedy</option>
            <option value="horror">sci-fi</option>
            <option value="sci-fi">horror</option>
            <option value="thriller">thriller</option>
          </select>
        </div>
        <div className="new-movie__control">
          <label>IMDb Score</label>
          <input
            type="number"
            min="1.0"
            max="10"
            value={enteredMovieScore}
            onChange={scoreChangeHandler}
          ></input>
          <div className="new-movie__control">
            <label>Picture link</label>
            <input
              type="text"
              value={enteredMoviePicture}
              onChange={pictureChangeHandler}
            ></input>
          </div>
        </div>
        <div className="new-movie__actions">
          <button type="submit">Add Movie</button>
        </div>
      </div>
    </form>
  );
};

export default MovieForm;
