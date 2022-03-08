import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const myStyle = { fontSize: '100px' };

function Big(props) {
	return (
		<>
			{console.log('hello')}

			<div>
				<h1 style={myStyle}>{props.text}</h1>
			</div>
		</>
	);
}

Big.defaultProps = { text: 'Unnamed' };
export default Big;
