import React from "react";

const MovieFilter = ({ onChangeFilter, selectedGenre }) => {
  const onChangeFilterHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <>
      <h2 className="main-title">My Favourite Movies</h2>
      <div className="movie-filter">
        <label>Filter by genre:</label>
        <select value={selectedGenre} onChange={onChangeFilterHandler}>
          <option value="all">All</option>
          <option value="horror">horror</option>
          <option value="sci-fi">sci-fi</option>
          <option value="thriller">thriller</option>
        </select>
      </div>
    </>
  );
};

export default MovieFilter;
