import React, { useState } from "react";
import SearchBar from "./components/SearchBar";

import { foods, filterItems } from "./utils/data";

const SearchQuery = () => {
  const [query, setQuery] = useState("");

  const results = filterItems(foods, query);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <SearchBar query={query} handleQueryChange={handleQueryChange} />
      <List items={results} />
    </div>
  );
};

const List = ({ items }) => {
  return (
    <>
      <table className="search-list">
        <tbody>
          {items.map((food) => {
            return (
              <tr>
                <td>{food.name}</td>
                <td>{food.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SearchQuery;
