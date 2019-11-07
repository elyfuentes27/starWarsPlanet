import React from 'react';
import { useDarkMode } from '../utils/useDarkMode';

const Navbar = () => {
	const [darkMode, setDarkMode] = useDarkMode();
	const toggleMode = e => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};
	return (
		<nav className='navbar'>
			<h1>StarWars Planet</h1>
			<div className='dark-mode__toggle'>
				<div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'} />
			</div>
		</nav>
	);
};

export default Navbar;
