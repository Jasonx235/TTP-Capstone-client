import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import * as api from "../../api";
import removeEmpty from "../../utils/DataClean";
import Ingredients from "../Ingredients";
import ReactPlayer from "react-player";

class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const recipeId = this.props.match.params.recipeId;
      const temp = await api.singleRecipe(recipeId);
      const cleanData = removeEmpty(temp.data.meals);
      this.setState({ data: cleanData });
      console.log(this.state.data);
    } catch (err) {
      console.log(err);
    }
  };

  displayCard = () => {
    let result = this.state.data;
    let myData;
    myData = result.map((recipe) => (
      <Grid className='detailDisplay' key={recipe.idMeal}>
        <Grid.Row className='detailDisplayInfo'>
          <Grid.Column width={6}>
            <Image src={recipe.strMealThumb} />
          </Grid.Column>
          <Grid.Column width={10}>
            {/* title, category, area, ingredients, and measures */}
            <h1 className='detailDisplayTitle'>{recipe.strMeal}</h1>
            <p>
              Category: {recipe.strCategory}
              <br />
              Area: {recipe.strArea}
              <br />
              <a href={recipe.strSource}>Source</a>
            </p>
            <Ingredients
              ingredientsArray={recipe.ingredientsArray}
              measurementsArray={recipe.measurementsArray}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row className='detailDisplayInstruction'>
          <Grid.Column width={16}>
            {recipe.strInstructions}
            <br />
            <br />
            <ReactPlayer url={recipe.strYoutube} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ));
    return myData;
  };
  render() {
    return this.displayCard();
  }
}

export default SingleRecipe;
