import * as api from '../api';
import removeEmpty from './../utils/DataClean';

//create actions for recipes

//general Search
export const getRecipes = (search) => async (dispatch) => {
	try {
		const { data } = await api.searchRecipe(search.search);
		let cleanData = removeEmpty(data.meals);
		dispatch({ type: 'SEARCH', payload: cleanData });
	} catch (error) {
		console.log(error);
	}
};

//category search
export const getCategory = (item) => async (dispatch) => {
	try {
		const { data } = await api.searchCategory(item);
		dispatch({ type: 'CATEGORY', payload: data });
	} catch (error) {
		console.log(error);
	}
};

//Area Search
export const getArea = (item) => async (dispatch) => {
	try {
		const { data } = await api.searchArea(item);
		dispatch({ type: 'AREA', payload: data });
	} catch (error) {
		console.log(error);
	}
};
