import React from 'react';
import '../styles/SkillBars.css';

function SkillBars(props) {
	const skillPercent = props.skillPercent;
	const barWidth = { width: skillPercent };
	return (
		<div className="skillContainer">
			<div className="skillColumn">
				<p>{props.skill}</p>
			</div>
			<div className="skillBar">
				<div className="grayBar"></div>
				<div className="blackBar" style={barWidth}></div>
			</div>
		</div>
	);
}

export default SkillBars;
