import { useState, useEffect } from 'react';
import axios from 'axios';

import '../css/weather.css';
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '4f0a229500c85a882ed83385bc87bd7f';
const UNITS = 'metric';

// FOR AXIOS
// axios.get(`${WEATHER_URL}${city}&appid=${API_KEY}&units=${UNITS}`).then((result) => {
// 	setWeatherData([result.data]);
// });

function Weather() {
	const [city, setCity] = useState('paris');
	const [weatherData, setWeatherData] = useState([]);

	useEffect(() => {
		axios.get(`${WEATHER_URL}${city}&appid=${API_KEY}&units=${UNITS}`).then((result) => {
			setWeatherData([result.data]);
		});
	}, [city]);

	const onNewCity = (event) => {
		console.log(event.target.value);
		setCity(event.target.value);
	};
	return (
		<>
			<div className='world-weather'>World Weather</div>
			<div className='todays-weather'>
				{weatherData.map((item, i) => (
					<div key={i}>
						<p>
							Todays Weather in {item.name} : {item.weather[0].description}
						</p>
						<p>Current Temperature: {item.main.temp}</p>
						<p>
							Todays Range: Max:{item.main.temp_max}, Min:{item.main.temp_min}
						</p>
					</div>
				))}
			</div>
			<div className='user-input'>
				<label>
					What do we want to go?
					<select value={city} onChange={onNewCity}>
						<option value='paris'>Paris</option>
						<option value='vegettokyoable'>Tokyo</option>
						<option value='berlin'>Berlin</option>
						<option value='auckland'>Auckland</option>
						<option value='shanghai'>Shanghai</option>
						<option value='new york'>New York</option>
						<option value='moscow'>Moscow</option>
						<option value='sydney'>Sydney</option>
						<option value='gore'>Gore</option>
					</select>
				</label>
			</div>
		</>
	);
}

export default Weather;
