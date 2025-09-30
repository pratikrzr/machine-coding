import React from "react";

const SearchBar = ({ query, handleQueryChange, handleQueryClick }) => {
  return (
    <div className="search-bar">
      <label className="search-label">
        Search:
        <input type="text" value={query} onChange={handleQueryChange} />
      </label>
      <button onClick={handleQueryClick}>Serch</button>
    </div>
  );
};

export default SearchBar;
