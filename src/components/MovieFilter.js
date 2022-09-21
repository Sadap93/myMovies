import React from "react";
import { categories } from "./../categoriesArray";

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
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default MovieFilter;
