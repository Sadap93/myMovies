import React from "react";
import "./MovieForm.css";

const MovieForm = () => {
  return (
    <div className="new-movie__controls">
      <div className="new-movie__control">
        <label>Title</label>
        <input type="text"></input>
      </div>
      <div className="new-movie__control">
        <label>Relase Date</label>
        <input type="date" min="1888-01-01" max="2100-12-31"></input>
      </div>
      <div className="new-movie__control">
        <label>Genre</label>
        <input type="text"></input>
      </div>
      <div className="new-movie__control">
        <label>IMDb Score</label>
        <input type="number" min="1.0" max="10"></input>
      </div>
      <div className="new-movie__actions">
        <button type="submit">Add Movie</button>
      </div>
    </div>
  );
};

export default MovieForm;
