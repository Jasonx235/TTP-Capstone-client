import * as api from '../api';
import removeEmpty from '../utils/DataClean';

export const getRandom = () => async (dispatch) => {
	try {
		const { data } = await api.searchRandom();
		let cleanData = removeEmpty(data.meals);
		dispatch({ type: 'SINGLE', payload: cleanData });
	} catch (error) {
		console.log(error);
	}
};

export const getRandoms = (search) => async (dispatch) => {
	try {
		let temp = [];
		for (let i = 0; i < 3; i++) {
			let { data } = await api.searchRandom();
			temp.push(data.meals[0]);
		}

		let cleanData = removeEmpty(temp);
		console.log(cleanData);
		dispatch({ type: 'HOME', payload: cleanData });
	} catch (error) {
		console.log(error);
	}
};
