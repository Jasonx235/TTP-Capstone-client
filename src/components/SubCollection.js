import React from "react";
import { Grid } from "semantic-ui-react";

import RecipeCard from "./RecipeCard";
import { useSelector } from "react-redux";

const SubCollection = (props) => {
  const { collection } = props;
  const recipe = useSelector((state) => state.collection);

  let data = recipe.map((rec) => (
    <RecipeCard
      recipeImage={rec.strMealThumb}
      recipeName={rec.strMeal}
      idMeal={rec.idMeal}
      added={true}
      key={rec.idMeal}
    />
  ));

  return (
    <div>
      <h1>{collection.collectionName}</h1>
      <Grid columns={3}>
        <Grid.Row>{data}</Grid.Row>
      </Grid>
    </div>
  );
};

export default SubCollection;
