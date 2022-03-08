import React from 'react';

function SuperButton(props) {
	return (
		<div>
			<button onClick={props.onAdd}>Add to Todos</button>
		</div>
	);
}

export default SuperButton;
