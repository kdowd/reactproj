import React from 'react';
import AllFishItem from './AllFishItem';
import '../css/fishitem.css';

function AllFish() {
	return (
		<div className='fish-wrapper'>
			<AllFishItem path={'./images/products/comet.jpg'} title={'Shubunkin'} price={'$55'} />
			<AllFishItem />
			<AllFishItem />
			<AllFishItem />
			<AllFishItem />
			<AllFishItem />
		</div>
	);
}

export default AllFish;
