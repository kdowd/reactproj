import React from 'react';
import { useState } from 'react';
import Cat from './Cat';
import Dog from './Dog';
import Bird from './Bird';
import Modal from './Modal';

const flexy = { display: 'flex', gap: '16px' };

function AnimalWrapper() {
	const [selection, setSelection] = useState('?');

	const UpdateSelection = (str) => {
		setSelection(str);
	};
	return (
		<>
			<h1>You clicked a {selection}</h1>
			<div className='animal-wrapper' style={flexy}>
				<Cat update={UpdateSelection} />
				<Dog update={UpdateSelection} />
				<Bird update={UpdateSelection} />
			</div>

			<button>Open Modal</button>
			<Modal />
		</>
	);
}

export default AnimalWrapper;
