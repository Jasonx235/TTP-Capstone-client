import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";

import { AuthContext } from "../../context/auth";
import RecipeCards from "../RecipeCards";
import { FETCH_COLLECTIONS_QUERY } from "../../utils/graphql";

function User() {
  const { user } = useContext(AuthContext);
  const { loading, data: { getCollections: collections } = {} } = useQuery(
    FETCH_COLLECTIONS_QUERY
  );
  console.log(collections);
  // let test = collections[0].body.recipe[0].body;
  // console.log(test);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default User;
