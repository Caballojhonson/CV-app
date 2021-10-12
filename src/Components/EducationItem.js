import React from 'react';
import '../styles/educationItem.css'

function EducationItem(props) {
	return (
		<div className="mainContain">
			<h3>{props.place}</h3>
			<p contentEditable="true">{props.period} | {props.course}</p>
		</div>
	);
}

export default EducationItem;
