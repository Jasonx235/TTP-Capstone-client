import React from "react";
import { Button, Card, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

function RecipeCard(props) {
  return (
    <Grid.Column className='gridColumn'>
      <Card className='cardClass'>
        <Image
          src={props.recipeImage}
          height={300}
          alt='recipe'
          as={Link}
          to={`/result/${props.idMeal}`}
        />
        <Card.Content className='cardContent'>
          <Card.Header as={Link} to={`/result/${props.idMeal}`}>
            {props.recipeName}
          </Card.Header>
        </Card.Content>
        <Card.Content extra className='cardExtraContent'>
          <Button
            color='orange'
            content='Add to Collections'
            icon='add circle'
          />
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}

export default RecipeCard;
