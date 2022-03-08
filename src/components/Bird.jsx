import React from 'react';
import MyImage from '../images/bird.jpg';
import Button from './Button';
const flexy = { display: 'flex', gap: '16px', flexDirection: 'column' };

function Bird(props) {
	return (
		<div
			style={flexy}
			onClick={() => {
				props.update('Bird');
			}}>
			<img src={MyImage} alt='bird' />
			<Button message='Click Bird' />
		</div>
	);
}

export default Bird;
