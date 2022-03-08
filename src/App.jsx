import logo from './logo.svg';
import './App.css';
import './css/reviews.css';
import { useState } from 'react';

import { Routes, Route, Link } from 'react-router-dom';

import BackGround from './images/bg.jpg';
import AnimalWrapper from './components/AnimalWrapper';
import HackerNews from './components/HackerNews';
import FourOhFour from './components/FourOhFour';
import { CSSTransition } from 'react-transition-group';
import './css/transitions.css';

function App() {
	function testy(s) {
		alert(s);
	}
	return (
		<div className='App'>
			<MainMenu />
			<header className='App-header' style={{ backgroundImage: `url(${BackGround})` }}>
				<Routes>
					<Route path='/hacker-london' element={<HackerNews />} />
					<Route path='/hacker-paris' element={<HackerNews />} />
					<Route path='/hacker-tokyo' element={<HackerNews />} />
					<Route path='/hacker-singapore' element={<HackerNews />} />
				</Routes>

				<img src={logo} className='App-logo' alt='logo' />
			</header>
		</div>
	);
}

export default App;

function MainMenu() {
	const menuStyle = { display: 'flex', justifyContent: 'space-evenly' };
	return (
		<div>
			<nav>
				<ul style={menuStyle}>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/hacker-london/?searchTerm=auckland'>News-Auckland</Link>
					</li>
					<li>
						<Link to='/hacker-paris/?searchTerm=paris'>News-Paris</Link>
					</li>
					<li>
						<Link to='/hacker-tokyo/?searchTerm=tokyo'>News-Tokyo</Link>
					</li>
					<li>
						<Link to='/hacker-singapore/?searchTerm=singapore'>News-Singapore</Link>
					</li>
				</ul>
			</nav>

			<hr />
		</div>
	);
}
