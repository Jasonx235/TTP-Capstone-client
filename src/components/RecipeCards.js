import React from 'react';
import { useSelector } from 'react-redux';
import NoResultsFound from './NoResultFound';
import RecipeCard from './RecipeCard';
import { Grid } from 'semantic-ui-react';

const RecipeCards = () => {
	const recipes = useSelector((state) => state.recipes);
	console.log(recipes);
	const setRecipes = () => {
		let results = [];
		if (recipes.length > 0) {
			results = recipes.map((recipe) => (
				<RecipeCard
					recipeImage={recipe.strMealThumb}
					recipeName={recipe.strMeal}
					key={recipe.idMeal}
				/>
			));
			return (
				<Grid columns={3}>
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
