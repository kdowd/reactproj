import React from 'react';
import { useState } from 'react';
import '../css/todos.css';
import SingleTodo from './SingleTodo';
import SuperButton from './SuperButton';

function AllTodos() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: 'Finish React Series',
			editing: false,
			isComplete: false,
		},
		{
			id: 2,
			title: 'Go Grocery',
			editing: false,
			isComplete: true,
		},
		{
			id: 3,
			title: 'Take over world',
			editing: false,
			isComplete: false,
		},
	]);

	const completeTodo = (id) => {
		const updatedTodos = todos.map((elem) => {
			if (elem.id == id) {
				elem.isComplete = !elem.isComplete;
			}

			return elem;
		});

		setTodos(updatedTodos);
		console.log(todos);
	};

	const addTodo = () => {
		let temp = {
			id: 4,
			title: 'Ban hard work',
			editing: false,
			isComplete: false,
		};

		setTodos([...todos, temp]);
	};

	return (
		<>
			<div className='all-todos'>
				{console.log('render')}
				<p>All Tasks:</p>
				{todos.map((elem, i) => (
					<SingleTodo
						key={i}
						counter={elem.id}
						title={elem.title}
						isComplete={elem.isComplete}
						completeTodo={completeTodo}
					/>
					// <div key={i} className='single-todo'>
					// 	<span>{elem.counter} </span>
					// 	<span className={`${elem.isComplete ? 'todo-completed' : null}`}>{elem.title}</span>
					// 	<label htmlFor='iscomplete'>
					// 		<input id='iscomplete' type='checkbox' checked={elem.isComplete} onChange={() => completeTodo(elem.id)} />
					// 		<span>Completed</span>
					// 	</label>
					// </div>
				))}
			</div>

			<SuperButton onAdd={addTodo} />
		</>
	);
}

export default AllTodos;
