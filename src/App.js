import React, { Fragment } from 'react';
import Navbar from './component/Navbar';
import { useApi } from './api/useApi';

import './styles.scss';
import MovieList from './component/MovieList';

function App() {
	const [starWarsMovies] = useApi('https://swapi.co/api/films', []);
	const [planetList, doFetch] = useApi();

	return (
		<Fragment>
			<Navbar />
			<MovieList list={starWarsMovies} planetList={planetList} doFetch={doFetch} />
		</Fragment>
	);
}
export default App;
