import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";

import SearchBar from "../SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getRandoms } from "../../actions/random";
import RecipeCard from "../RecipeCard";
import { AuthContext } from "../../context/auth";

function Home() {
  const { user } = useContext(AuthContext);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandoms());
  }, []);

  const random = useSelector((state) => state.random);

  return (
    <>
      <div className='ui inverted vertical masthead center aligned segment'>
        <div className='ui text container'>
          <h1
            className='ui inverted header'
            id='homeLogo'
            style={{ fontSize: 60 }}
          >
            Food Mood
          </h1>
          <h2 style={{ marginBottom: 20 }}>Find your next favorite meal!</h2>
          <SearchBar />
        </div>
      </div>

      <h2>Try these Recipes!</h2>
      <div className='devFav center'>
        <Grid columns={3}>
          <Grid.Row>
            {random.map((random) => (
              <RecipeCard
                recipeImage={random.strMealThumb}
                recipeName={random.strMeal}
                idMeal={random.idMeal}
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
