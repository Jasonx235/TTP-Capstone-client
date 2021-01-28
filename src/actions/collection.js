import * as api from "../api";
import removeEmpty from "../utils/DataClean";

export const getData = (myData) => async (dispatch) => {
  try {
    let newData = [];
    for (let i = 0; i < myData.length; i++) {
      for (let j = 0; j < myData[i].recipeArray.length; j++) {
        let { data } = await api.singleRecipe(myData[i].recipeArray[j].body);
        newData.push(data.meals[0]);
      }
    }
    let seen = new Set();
    const filteredData = newData.filter((rep) => {
      const duplicate = seen.has(rep.idMeal);
      seen.add(rep.idMeal);
      return !duplicate;
    });

    let cleanData = removeEmpty(filteredData);
    dispatch({ type: "GET_DATA", payload: cleanData });
  } catch (error) {
    console.log(error);
  }
};
