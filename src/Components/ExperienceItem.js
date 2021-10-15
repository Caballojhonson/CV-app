import React from 'react';
import '../styles/experienceItem.css';
import trashIcon from '../trash-bin.png';

class ExperienceItem extends React.Component {
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
		return (
			<div
				className="experienceContainer"
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
                <img
					style={this.state.style}
					className="expTrashIcon"
					src={trashIcon}
					alt="Trashcan Icon"
					onClick={this.props.deletion}
				/>
				<div className="yearCol">
					<h3>{this.props.year}</h3>
				</div>
				<div>
					<h3 className="employer">{this.props.employer}</h3>
					<h4 className="position">{this.props.position}</h4>
					<ul className="list">{this.props.jobs}</ul>
				</div>
			</div>
		);
	}
}

export default ExperienceItem;
