import React, { useContext } from "react";
import RecipeCards from "../RecipeCards";

import SearchBar from "../SearchBar";

import { AuthContext } from "../../context/auth";

function Search() {
  const { user } = useContext(AuthContext);

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
