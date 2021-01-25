const removeEmpty = (data) => {
	let cleanData = [];
	data.forEach((meal) => {
		let temp = {};
		const mealEntries = Object.entries(meal),
			[ingredientsArray, measuresArray] = [
				'strIngredient',
				'strMeasure'
			].map((keyName) =>
				mealEntries
					.filter(
						([key, value]) => key.startsWith(keyName) && value && value.trim()
					)
					.map(([key, value]) => value)
			);

		temp['idMeal'] = meal['idMeal'];
		temp['strInstructions'] = meal['strInstructions'];
		temp['strMeal'] = meal['strMeal'];
		temp['strMealThumb'] = meal['strMealThumb'];
		temp['strSource'] = meal['strSource'];
		temp['strYoutube'] = meal['strYoutube'];
		temp['ingredientsArray'] = ingredientsArray;
		temp['measurementsArray'] = measuresArray;
        cleanData.push(temp);
        
	});
	return cleanData;
};

export default removeEmpty;
