import React from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';

function RecipeCard(props) {
	return (
		<Grid.Column className="gridColumn">
			<Card className="cardClass">
				<img src={props.recipeImage} height={300} />
				<Card.Content className="cardContent">
					<Card.Header>{props.recipeName}</Card.Header>
				</Card.Content>
			</Card>
		</Grid.Column>
	);
}

export default RecipeCard;
