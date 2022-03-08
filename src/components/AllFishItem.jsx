import React from 'react';
import '../css/fishitem.css';

function AllFishItem(props) {
	return (
		<div className='fish-item'>
			<img src={props.path} />
			<div className='title-bar'>
				<p>{props.title}</p>
				<p>{props.price}</p>
			</div>
		</div>
	);
}

AllFishItem.defaultProps = { title: 'fiiish', path: './images/products/fantail.jpg', price: '$99' };

export default AllFishItem;
