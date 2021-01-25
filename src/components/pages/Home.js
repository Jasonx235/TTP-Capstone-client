import React, { useContext } from 'react';


import { AuthContext } from '../../context/auth';


function Home() {
	const { user } = useContext(AuthContext);


	return (
		<h1>This is the home page</h1>
	);
}

export default Home;