import React from 'react';
import { useState, useEffect } from 'react';

function SingleTodo(props) {
	const [isCompleted, setComplete] = useState(props.isComplete);

	useEffect(() => {
		console.log('WTF');
	}, [isCompleted]);

	const onUpdateTodoStatus = (e) => {
		// let current = isCompleted;
		// setComplete(!current);x

		props.completeTodo(props.counter);
	};
	return (
		<div className='single-todo'>
			<span>{props.counter} </span>
			<span className={`${isCompleted ? 'cancel-todo' : null} `}>{props.title}</span>
			<label htmlFor='iscomplete'>
				<input id='iscomplete' type='checkbox' checked={isCompleted} onChange={onUpdateTodoStatus} />
				<span>Completed</span>
			</label>
		</div>
	);
}

export default SingleTodo;
