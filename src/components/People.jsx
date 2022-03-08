import React from 'react';
import { useState } from 'react';
import peopleArray from '../people.js';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function People() {
	const maxPeople = peopleArray.length;
	const [index, setIndex] = useState(0);
	const personObject = peopleArray[index];

	const nextPerson = () => {
		setIndex((index) => {
			let temp = index + 1;
			if (temp >= maxPeople) {
				temp = 0;
			}
			return temp;
		});
	};

	const prevPerson = () => {
		setIndex((index) => {
			let temp = index - 1;

			if (temp < 0) {
				temp = maxPeople - 1;
			}

			return temp;
		});
	};

	return (
		<>
			<article className='review'>
				<div className='img-container'>
					<img src={personObject.image} alt={personObject.name} className='person-img' />
					<span className='quote-icon'>
						<FaQuoteRight />
					</span>
				</div>
				<h4 className='author'>{personObject.name}</h4>
				<p className='job'>{personObject.job}</p>
				<p className='info'>{personObject.text}</p>
				<div className='button-container'>
					<button className='prev-btn' onClick={prevPerson}>
						<FaChevronLeft />
					</button>
					<button className='next-btn' onClick={nextPerson}>
						<FaChevronRight />
					</button>
				</div>
			</article>
		</>
	);
}

export default People;
