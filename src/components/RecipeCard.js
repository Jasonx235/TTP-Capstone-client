import React from 'react';
// import {Card} from 'semantic-ui-react'

function RecipeCard(props) {

	return (
		<div className="ui link cards">
			<div className="card">
				<div className="image">
					<img src={props.recipeImage} alt="recipeImage" />
				</div>
				<div className="content">
					<div className="header">{props.recipeName}</div>
				</div>
			</div>
		</div>
	);
}

export default RecipeCard;
