import React from 'react';
import FormInput from './FormInput';

function EducationForm(props) {
	return (
		<div>
			<FormInput
				value={props.placeValue}
				label="Place"
				id="place"
				handler={props.handler}
			/>
			<FormInput
				value={props.periodValue}
				label="Period"
				id="period"
				handler={props.handler}
			/>
			<FormInput
				value={props.certificateValue}
				label="Certificate"
				id="certificate"
				handler={props.handler}
			/>
			<button onClick={props.clickHandler}>+Add</button>
		</div>
	);
}

export default EducationForm;
