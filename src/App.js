import React from 'react';
import Cv from './Components/Cv';
import EducationForm from './Components/EducationForm';
import FormInput from './Components/FormInput';
import Section from './Components/Section';
import './styles/app.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			//Complete placeholders
			fullName: '',
			occupation: '',
			phone: '',
			education: [],
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleEducation = this.handleEducation.bind(this);
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
		console.log(place);
		console.log(this.state);
		e.target.value = '';
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
		} = this.state;

		return (
			<div className="app__wrapper">
				<form className="formContainer">
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
				</form>

				<Cv
					fullName={fullName}
					occupation={occupation}
					phone={phone}
					phone2={phone2}
					email={email}
					website={website}
					about={about}
					education={education}
				/>
			</div>
		);
	}
}
export default App;
