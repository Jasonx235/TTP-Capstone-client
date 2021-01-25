import axios from "axios";

//General Search
export const searchRecipe = (food) => axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`);
export const searchCategory = (item) => axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${item}`);
export const searchArea = (item) => axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${item}`);

//Random
export const searchRandom = () => axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`);



export const singleRecipe = (recipe) => axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe}`)

