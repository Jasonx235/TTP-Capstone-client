import React, { useContext } from 'react';
import RecipeCards from '../RecipeCards';
import RecipeCard from '../RecipeCard';
import NavBar from '../../components/NavBar';

import { AuthContext } from '../../context/auth';

function Search() {
	const { user } = useContext(AuthContext);

	return (
		<div id="searchResults">
			<RecipeCards />
		</div>
	);
}

export default Search;
