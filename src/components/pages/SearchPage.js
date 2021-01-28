import React from "react";
import RecipeCards from "../RecipeCards";

import SearchBar from "../SearchBar";

function Search() {
  return (
    <>
      <SearchBar />
      <h2>Search Results</h2>
      <div id='searchResults'>
        <RecipeCards />
      </div>
    </>
  );
}

export default Search;
