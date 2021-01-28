import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getData } from "../../actions/collection";
import { AuthContext } from "../../context/auth";
import { FETCH_COLLECTIONS_QUERY } from "../../utils/graphql";
import SubCollection from "../SubCollection";

function Collection() {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  const dispatch = useDispatch();
  const [recipeData, setMyData] = useState([]);
  if (!user) {
    history.push("/");
  }
  useEffect(() => {
    dispatch(getData(myData));
    setMyData(myData);
  }, []);

  const { loading, data: { getCollections: collections } = {} } = useQuery(
    FETCH_COLLECTIONS_QUERY
  );

  const ParseData = () => {
    let parsedData = [];
    collections &&
      collections.forEach((collection) => {
        let temp = {};
        temp["collectionName"] = collection.body;
        temp["recipeArray"] = collection.recipes;
        parsedData.push(temp);
      });
    return parsedData;
  };

  let myData = ParseData();

  console.log(recipeData);
  const displayCollection = () => {
    let display = recipeData.map((collection) => (
      <SubCollection collection={collection} key={collection.collectionName} />
    ));
    return display;
  };

  return <div>{loading ? <h1>Loading...</h1> : displayCollection()}</div>;
}

export default Collection;
