import React from 'react';
import Cv from './Components/Cv';
import EducationForm from './Components/EducationForm';
import FormInput from './Components/FormInput';
import Section from './Components/Section';
import ExperienceForm from './ExperienceForm';
import './styles/app.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			//Complete placeholders
			fullName: 'Ernesto Placeholder',
			occupation: 'Web developer',
			phone: '+14844458179',
			education: [],
			experience: [],
			functions: [],
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleEducation = this.handleEducation.bind(this);
		this.handleExperience = this.handleExperience.bind(this);
	}

	handleChange(e) {
		const value = e.target.value;
		this.setState({
			[e.target.id]: value,
		});
		console.log(this.state);
	}

	handleEducation(e) {
		e.preventDefault();

		const { place, period, certificate } = this.state;
		const education = {
			place: place,
			period: period,
			certificate: certificate,
		};

		this.setState({
			education: this.state.education.concat(education),
			place: '',
			period: '',
			certificate: '',
		});
	}

	handleExperience(e) {
		e.preventDefault();

		const {
			year,
			company,
			position,
			function1,
			function2,
			function3,
			function4,
		} = this.state;

		const functions = [function1, function2, function3, function4];

		const experience = {
			year: year,
			company: company,
			position: position,
			functions: functions,
		};

		this.setState({
			experience: this.state.experience.concat(experience),
			functions: this.state.functions.concat(functions),
			year: '',
			company: '',
			position: '',
			function1: '',
			function2: '',
			function3: '',
			function4: '',
		});
	}

	render() {
		const {
			fullName,
			occupation,
			phone,
			phone2,
			email,
			website,
			about,
			education,
			experience,
		} = this.state;

		return (
			<div className="app__wrapper">
				<div className="formContainer">
					<form className="form">
						<Section
							title="Personal details"
							content={
								<div>
									<FormInput
										label="Full name"
										id="fullName"
										handler={this.handleChange}
									/>
									<FormInput
										label="Occupation"
										id="occupation"
										handler={this.handleChange}
									/>
									<FormInput
										label="Phone"
										id="phone"
										handler={this.handleChange}
									/>
									<FormInput
										label="Phone alt."
										id="phone2"
										handler={this.handleChange}
									/>
									<FormInput
										label="Email"
										id="email"
										handler={this.handleChange}
									/>
									<FormInput
										label="Website"
										id="website"
										handler={this.handleChange}
									/>
									<FormInput
										label="About"
										id="about"
										handler={this.handleChange}
									/>
								</div>
							}
						/>
						<Section
							title="Education"
							content={
								<div>
									<EducationForm
										placeValue={this.state.place}
										periodValue={this.state.period}
										certificateValue={this.state.certificate}
										handler={this.handleChange}
										clickHandler={this.handleEducation}
									/>
								</div>
							}
						/>
						<Section
							title="Experience"
							content={
								<div>
									<ExperienceForm
										handler={this.handleChange}
										clickHandler={this.handleExperience}
										yearValue={this.state.year}
										companyValue={this.state.company}
										positionValue={this.state.position}
										function1Value={this.state.function1}
										function2Value={this.state.function2}
										function3Value={this.state.function3}
										function4Value={this.state.function4}
									/>
								</div>
							}
						/>
					</form>
				</div>

				<Cv
					fullName={fullName}
					occupation={occupation}
					phone={phone}
					phone2={phone2}
					email={email}
					website={website}
					about={about}
					education={education}
					experience={experience}
				/>
			</div>
		);
	}
}
export default App;
