import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BsEmojiSmileFill } from 'react-icons/bs';

const localCSS = { padding: '16px', fontSize: '20px', marginBottom: '12px' };
const emoji = { color: 'crimson' };
const selectStyle = { display: 'flex', gap: '24px', padding: '30px' };

function CurrencyConverter() {
	const [amount, setAmount] = useState(100);
	const [currencyOne, setCurrencyOne] = useState('eur');
	const [currencyTwo, setCurrencyTwo] = useState('nzd');
	const [currencyData, setCurrencyData] = useState([]);

	useEffect(() => {
		let url = `https://v6.exchangerate-api.com/v6/c6f6b942d3133e6bba4eacdc/pair/${currencyOne}/${currencyTwo}/${amount}`;
		axios.get(url).then((response) => {
			console.log(response);
			setCurrencyData([response.data]);
		});
	}, [amount, currencyOne, currencyTwo]);

	const onUpdateAmount = (event) => {
		setAmount(event.target.value);
	};

	const onNewCurrencyOne = (event) => {
		setCurrencyOne(event.target.value);
	};
	const onNewCurrencyTwo = (event) => {
		setCurrencyTwo(event.target.value);
	};

	return (
		<div>
			<input style={localCSS} type='number' value={amount} onChange={onUpdateAmount} />
			{/* https://www.exchangerate-api.com/docs/supported-currencies */}
			<div className='select-wrap' style={selectStyle}>
				<div className='user-input'>
					<label>
						Origin Currency:
						<select value={currencyOne} onChange={onNewCurrencyOne}>
							<option value='usd'>United States Dollar</option>
							<option value='gbp'>Pound Sterling</option>
							<option value='aud'>Australian Dollar</option>
							<option value='nzd'>New Zealand Dollar</option>
							<option value='rub'>Russian Ruble</option>
							<option value='eur'>Euro</option>
							<option value='jpy'>Japanese Yen</option>
							<option value='mmk'>Burmese Kyat</option>
							<option value='npr'>Nepalese Rupee</option>
						</select>
					</label>
				</div>
				<div className='user-input'>
					<label>
						Target Currency:
						<select value={currencyTwo} onChange={onNewCurrencyTwo}>
							<option value='usd'>United States Dollar</option>
							<option value='gbp'>Pound Sterling</option>
							<option value='aud'>Australian Dollar</option>
							<option value='nzd'>New Zealand Dollar</option>
							<option value='rub'>Russian Ruble</option>
							<option value='eur'>Euro</option>
							<option value='jpy'>Japanese Yen</option>
							<option value='mmk'>Burmese Kyat</option>
							<option value='npr'>Nepalese Rupee</option>
						</select>
					</label>
				</div>
			</div>
			{currencyData.map((item, index) => (
				<div key={index}>
					<p>
						{amount} {item.base_code} gets you {item.conversion_result} {item.target_code}{' '}
						<BsEmojiSmileFill style={emoji} />
					</p>
				</div>
			))}
		</div>
	);
}

export default CurrencyConverter;
