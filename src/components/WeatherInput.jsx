import React from 'react';

function WeatherInput(props) {
	return (
		<div className='user-input'>
			<input
				type='text'
				onKeyPress={props.keyed}
				value={props.initialCity}
				onBlur={props.blurred}
				onChange={props.changed}
			/>
		</div>
	);
}

export default WeatherInput;
