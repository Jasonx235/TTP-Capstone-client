import React, { useContext, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';

import { useDispatch, useSelector } from 'react-redux';
import { getRandoms } from '../../actions/random';
import RecipeCard from '../RecipeCard';
import { AuthContext } from '../../context/auth';

function Home() {
	const { user } = useContext(AuthContext);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getRandoms());
	}, []);

	const random = useSelector((state) => state.random);

	return (
		<>
			<div className="ui inverted vertical masthead center aligned segment">
				<div className="ui text container">
					<h1 className="ui inverted header">My name</h1>
					<h2>My role</h2>
					<div className="ui huge primary button">
						Get Started <i className="right arrow icon" />
					</div>
				</div>
			</div>

			<h2>Random Recipes</h2>
			<div className="devFav center">
				<Grid columns={3}>
					<Grid.Row>
						{random.map((random) => (
							<RecipeCard
								recipeImage={random.strMealThumb}
								recipeName={random.strMeal}
								key={random.idMeal}
							/>
						))}
					</Grid.Row>
				</Grid>
			</div>
		</>
	);
}

export default Home;
