import React from 'react';
import MyImage from '../images/dog.jpg';
import Button from './Button';
import { useParams } from 'react-router-dom';

const flexy = { display: 'flex', gap: '16px', flexDirection: 'column' };

function Dog(props) {
	let params = useParams();
	return (
		<div
			style={flexy}
			onClick={() => {
				props.update('Dog');
			}}>
			<img src={MyImage} alt='dog' />
			{params.id && <h5>Dogg ID: {params.id}</h5>}
			<Button message='Click Dog' />
		</div>
	);
}

export default Dog;
