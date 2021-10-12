import React from 'react';
import '../styles/form.css'


function FormInput(props) {
	return (
		<div className="input__wrapper">
			<label className="input__label" htmlFor={props.id}>{props.label}</label>
			<input autoComplete="off" value={props.value} className="input__input" id={props.id} onChange={props.handler} />
		</div>
	);
}

export default FormInput