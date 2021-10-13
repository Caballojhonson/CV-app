import React from 'react';

function EducationItem(props) {
	return (
		<div className="mainContain">
			<h3>{props.place}</h3>
			<p>{props.period} | {props.course}</p>
		</div>
	);
}

export default EducationItem;
