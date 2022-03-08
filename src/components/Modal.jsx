import React from 'react';
import { useState } from 'react';

import modal from '../css/modal.css';
function Modal() {
	const [showModal, setShowModal] = useState(true);
	return <>{showModal && <div className='modal'>Modal</div>}</>;
}

export default Modal;
