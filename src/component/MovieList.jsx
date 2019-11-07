import React, { useState, useEffect, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
import PlanetList from './PlanetList';
import axios from 'axios';
import MobilePlanetList from './mobile/MobilePlanetList';
const { Panel } = Collapse;

const MovieList = ({ list, planetList, doFetch }) => {
	console.log('LIST', list);
	const [formattedList, setFormattedList] = useState([]);
	useEffect(() => {
		if (list.data.results) {
			setFormattedList(
				list.data.results.map(i => ({
					title: i.title,
					planets: i.planets,
					id: i.episode_id
				}))
			);
		}
	}, [list]);
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const updateListner = () => setWidth(window.innerWidth);
		window.addEventListener('resize', updateListner);
		return function cleanup() {
			window.addEventListener('resize', updateListner);
		};
	}, []);

	const [selectedMovie, setSelectedMovie] = useState([]);

	const onChange = index => {
		setSelectedMovie([]);
		if (index && index !== undefined) {
			const foundMovie = list.data.results.find(i => i.episode_id.toString() === index.toString());
			return Promise.all(
				foundMovie.planets.map(async url => {
					try {
						const result = await axios(url);
						setSelectedMovie(prevMovies => [...prevMovies, result.data]);
					} catch (err) {
						console.error(err);
					}
				})
			);
		}
	};

	const isMobile = width <= 768;
	return (
		<Fragment>
			{!isMobile ? (
				<div style={{ padding: '40px 100px' }}>
					{list.isLoading !== false ? (
						<div> Loading...</div>
					) : (
						<Fragment>
							<Collapse accordion onChange={onChange.bind(this)}>
								{formattedList.map(i => (
									<Panel header={i.title} key={i.id}>
										<PlanetList selectedMovie={selectedMovie} />
									</Panel>
								))}
							</Collapse>
						</Fragment>
					)}
				</div>
			) : (
				<div>
					{list.isLoading !== false ? (
						<div> Loading...</div>
					) : (
						<Fragment>
							<Collapse accordion onChange={onChange.bind(this)}>
								{formattedList.map(i => (
									<Panel header={i.title} key={i.id}>
										<MobilePlanetList selectedMovie={selectedMovie} />
									</Panel>
								))}
							</Collapse>
						</Fragment>
					)}
				</div>
			)}
		</Fragment>
	);
};

export default MovieList;
