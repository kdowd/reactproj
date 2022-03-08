import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

import '../sass/test.scss';

const articleStyle = {
	fontSize: '1.2rem',
	fontFamily: 'monospace',
	padding: '0.5rem',
	marginBottom: '0.5rem',
	textAlign: 'left',
	backgroundColor: 'dodgerblue',
};

const articleLink = { color: 'snow' };

function HackerNews(props) {
	let [searchParams] = useSearchParams();
	const [data, setData] = useState([]);
	const hackerNewsURL = `https://hn.algolia.com/api/v1/search?query=${searchParams.get('searchTerm')}`;

	useEffect(() => {
		axios.get(hackerNewsURL).then((response) => {
			console.log(response);
			setData(response.data.hits);
		});
		return () => {
			console.log('... cleanup.');
		};
	}, [searchParams.get('searchTerm')]);

	return (
		<div>
			{/* if we have stories let user know... */}
			{data.length && <h1> {data.length} Stories for you</h1>}
			{data.map((item, i) => (
				<div style={articleStyle} className='sassy' key={i}>
					<h5>{item.title}</h5>
					<h5>
						<a style={articleLink} href={item.url}>
							Read More
						</a>
					</h5>
				</div>
			))}
		</div>
	);
}

export default HackerNews;
// https://www.freecodecamp.org/news/fetch-data-react/
// https://www.geeksforgeeks.org/how-to-pass-data-from-one-component-to-other-component-in-reactjs/?ref=leftbar-rightbar
//https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components
//https://hn.algolia.com/api/v1/search?query=auckland
