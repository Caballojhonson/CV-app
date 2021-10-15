
import React from 'react';
import '../styles/SkillBars.css';
import trashIcon from '../trash-bin.png';

class SkillBars extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			style: { display: 'none' },
			key: this.props.key,
		};

		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleMouseEnter() {
		this.setState({
			style: { display: 'block' },
		});
	}

	handleMouseLeave() {
		this.setState({
			style: { display: 'none' },
		});
	}
	render() {
		const skillPercent = this.props.skillPercent;
		const barWidth = { width: skillPercent };
		return (
			<div
				className="skillContainer"
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				<div className="skillColumn">
					<p>{this.props.skill}</p>
				</div>
				<div className="skillBar">
					<div className="grayBar"></div>
					<div className="blackBar" style={barWidth}></div>
				</div>
				<img
					style={this.state.style}
					className="skillTrashIcon"
					src={trashIcon}
					alt="Trashcan Icon"
					onClick={this.props.deletion}
				/>
			</div>
		);
	}
}

export default SkillBars;
