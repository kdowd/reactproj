import React from 'react';
import MyImage from '../images/cat.jpg';
import Button from './Button';
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';
import '../css/transitions.css';
import { useState, useEffect } from 'react';

const flexy = { display: 'flex', gap: '16px', flexDirection: 'column', backgroundColor: 'pink' };

function Cat(props) {
	const navigate = useNavigate();
	const [inProp, setInProp] = useState(false);

	useEffect(() => {
		setInProp(true);
	}, []);
	const navi = () => {};
	return (
		<CSSTransition in={inProp} timeout={500} classNames='slide-vertical' unmountOnExit>
			<div style={flexy}>
				<>
					<img
						onClick={() => {
							navigate('/hacker/?searchTerm=paris');
						}}
						src={MyImage}
						alt='cat'
					/>

					<Button message='Click Cat' />
				</>
			</div>
		</CSSTransition>
	);
}

export default Cat;
