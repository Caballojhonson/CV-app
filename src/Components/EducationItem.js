import React from 'react';
import trashIcon from '../trash-bin.png';

class EducationItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			style: { display: 'none' },
			place: this.props.place,
			period:this.props.period,
			course: this.props.course,
			key: this.props.key
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
		return (
			<div
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
				
			>
				<div className="education__container">
					<h3>{this.props.place}</h3>
					<p>
						{this.props.period} | {this.props.course}
					</p>
				</div>
				<img
					style={this.state.style}
					className="trashIcon"
					src={trashIcon}
					alt="Trashcan Icon"
					onClick={this.props.deletion}
				/>
			</div>
		);
	}
}

export default EducationItem;
