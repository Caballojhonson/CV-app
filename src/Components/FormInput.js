import React from 'react';
import '../styles/form.css';

function FormInput(props) {
	const textArea = <textarea
	autoComplete="off"
	value={props.value}
	className="input__textarea"
	id={props.id}
	onChange={props.handler}
/>

const input = <input
autoComplete="off"
value={props.value}
className="input__input"
id={props.id}
onChange={props.handler}

/>

	return (
		<div className="input__wrapper">
			<label className="input__label" htmlFor={props.id}>
				{props.label}
			</label>
			{props.textarea ? textArea : input}
			
		</div>
	);
}

export default FormInput;
