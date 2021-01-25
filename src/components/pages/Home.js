import React, { useContext } from 'react';
import RecipeCards from '../RecipeCards'
import RecipeCard from '../RecipeCard';


import { AuthContext } from '../../context/auth';


function Home() {
	const { user } = useContext(AuthContext);


	return (
		<>
		<RecipeCards/>
		</>
	);
}

export default Home;