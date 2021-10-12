import React from 'react';
import FormInput from './Components/FormInput';

function ExperienceForm(props) {
	const optional1 = (
		<FormInput
			value={props.function2Value}
			id="function2"
			handler={props.handler}
		/>
	);
	const optional2 = (
		<FormInput
			value={props.function3Value}
			id="function3"
			handler={props.handler}
		/>
	);
	const optional3 = (
		<FormInput
			value={props.function4Value}
			id="function4"
			handler={props.handler}
		/>
	);

	return (
		<div>
			<FormInput
				value={props.yearValue}
				label="Year"
				id="year"
				handler={props.handler}
			/>
			<FormInput
				value={props.companyValue}
				label="Company"
				id="company"
				handler={props.handler}
			/>
			<FormInput
				value={props.positionValue}
				label="Position"
				id="position"
				handler={props.handler}
			/>
			<FormInput
				value={props.function1Value}
				label="Functions"
				id="function1"
				handler={props.handler}
			/>
			{props.function1Value && optional1}
			{props.function2Value && optional2}
			{props.function3Value && optional3}

			<button onClick={props.clickHandler}>Add</button>
		</div>
	);
}

export default ExperienceForm;
