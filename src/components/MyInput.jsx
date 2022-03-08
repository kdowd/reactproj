import React from 'react';
import { useRef, useEffect, useLayoutEffect } from 'react';

function MyInput() {
	const inputRef = useRef(null);

	useLayoutEffect(() => {
		inputRef.current.value = 'start';
	});
	useEffect(() => {
		inputRef.current.value = 'startcccc';
	});

	return <input type='text' ref={inputRef} placeholder='name' />;
}

export default MyInput;
