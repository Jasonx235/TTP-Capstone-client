import React, { useState, useContext } from "react";
import { Button, Card, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/react-hooks";

import {
  ADD_RECIPE_MUTATION,
  DELETE_RECIPE_MUTATION,
  FETCH_COLLECTIONS_QUERY,
} from "../utils/graphql";
import { AuthContext } from "../context/auth";

function RecipeCard(props) {
  const { data: { getCollections: collections } = {} } = useQuery(
    FETCH_COLLECTIONS_QUERY
  );

  let collectionId;
  let recipeId;
  const id = props.idMeal;
  const idMeal = id.toString();
  const { user } = useContext(AuthContext);

  const [added, setAdded] = useState(props.added);

  const setAdd = () => {
    setAdded(!added);
  };

  collections &&
    collections.forEach((collect) => {
      if (collect.username === (user && user.username)) {
        collectionId = collect.id;
      }
      collect.recipes.forEach((recipe) => {
        if (recipe.body === props.idMeal) {
          recipeId = recipe.id;
        }
      });
    });

  const [addRecipe] = useMutation(ADD_RECIPE_MUTATION, {
    update() {
      setAdd();
    },
    variables: {
      collectionId: collectionId,
      body: idMeal,
    },
  });

  const [deleteRecipe] = useMutation(DELETE_RECIPE_MUTATION, {
    update() {
      setAdd();
    },
    refetchQueries: [{ query: FETCH_COLLECTIONS_QUERY }],
    variables: {
      collectionId,
      recipeId,
    },
  });

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
          {user ? (
            added ? (
              <Button
                color='orange'
                content='Remove from Collection'
                icon='minus circle'
                onClick={deleteRecipe}
              />
            ) : (
              <Button
                basic
                color='orange'
                content='Add to Collection'
                icon='add circle'
                onClick={addRecipe}
              />
            )
          ) : (
            <Button
              basic
              color='orange'
              content='Add to Collection'
              icon='add circle'
              as={Link}
              to={"/login"}
            />
          )}
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}

export default RecipeCard;
