import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

import Birthdays from './components/Birthdays';
import HackerNews from './components/HackerNews';
import MyInput from './components/MyInput';
import AllTodos from './components/AllTodos';

function App() {
	const [showSpinner, setShowSpinner] = useState(true);

	const hideSpinner = () => {
		setShowSpinner(false);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<AllTodos />
				<Weather />
				{showSpinner && <img src={logo} className='App-logo' alt='logo' />}
				{/* <HackerNews src={'https://hn.algolia.com/api/v1/search?query=auckland'} killSpinner={hideSpinner} /> */}
			</header>
		</div>
	);
}

export default App;
