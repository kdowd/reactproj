import React from 'react';

const stylee = { padding: '6px 8px' };
function Button(props) {
	return <button style={stylee}>{props.message}</button>;
}

export default Button;
