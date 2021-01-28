import React from "react";
import { useSelector } from "react-redux";
import NoResultsFound from "./NoResultFound";
import RecipeCard from "./RecipeCard";
import { Grid } from "semantic-ui-react";

const RecipeCards = () => {
  const recipes = useSelector((state) => state.recipes);
  console.log(recipes);
  const setRecipes = () => {
    let results = [];
    let size;
    if (recipes.length > 0) {
      results = recipes.map((recipe) => (
        <RecipeCard
          recipeImage={recipe.strMealThumb}
          recipeName={recipe.strMeal}
          idMeal={recipe.idMeal}
          added={false}
          key={recipe.idMeal}
        />
      ));
      if (recipes.length === 1) {
        size = 1;
      } else if (recipes.length === 2) {
        size = 2;
      } else {
        size = 3;
      }
      return (
        <Grid columns={size}>
          <Grid.Row>{results}</Grid.Row>
        </Grid>
      );
    } else {
      results = <NoResultsFound />;
      return results;
    }
  };

  return setRecipes();
};

export default RecipeCards;
