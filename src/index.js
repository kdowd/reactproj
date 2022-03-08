import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as MyRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<MyRouter>
			<App />
		</MyRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
