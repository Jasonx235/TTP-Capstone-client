import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import axios from 'axios'

export class SingleRecipe extends Component {

    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getData()
    }

    removeEmpty3 = () => {
        let cleanData = [];
        this.state.data.forEach((meal) => {
            let temp = {};
            const mealEntries = Object.entries(meal),
                [ingredientsArray, measuresArray] = [
                    "strIngredient",
                    "strMeasure",
                ].map((keyName) =>
                mealEntries
                    .filter(
                    ([key, value]) => key.startsWith(keyName) && value && value.trim()
                    )
                    .map(([key, value]) => value)
                );
        
            temp["idMeal"] = meal["idMeal"];
            temp["strInstructions"] = meal["strInstructions"];
            temp["strMeal"] = meal["strMeal"];
            temp["strMealThumb"] = meal["strMealThumb"];
            temp["strSource"] = meal["strSource"];
            temp["strYoutube"] = meal["strYoutube"];
            temp["ingredientsArray"] = ingredientsArray;
            temp["measurementsArray"] = measuresArray;
            cleanData.push(temp);
        });
        this.setState({ cleanData: cleanData });
    };

    getData = async () => {
        await axios
            .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
            .then((res) => {
                this.setState({ data: res.data.meals });
            }, console.log("success"))
            .catch((err) => console.log("Not successful"));
        console.log(this.state.data);
        this.removeEmpty3();
        console.log(this.state.cleanData);
    };

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <Image src={this.state.data.strMealThumb}/>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        {/* title, category, area, ingredients, and measures */}
                        <h3>{this.state.data.strMeal}</h3>
                        <p>{this.state.data.strCategory}</p>
                        <br />
                        <p>{this.state.data.strArea}</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        {/* instructions */}

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default SingleRecipe
