import React from 'react';
import Cv from './Components/Cv';
import EducationForm from './Components/EducationForm';
import FormInput from './Components/FormInput';
import Section from './Components/Section';
import ExperienceForm from './Components/ExperienceForm';
import './styles/app.css';
import SkillForm from './Components/SkillForm';
import ReactToPrint from 'react-to-print';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			fullName: 'Ernesto Placeholder',
			occupation: 'Web developer',
			phone: '+14844458179',
			phone2: '+1-541-754-3010',
			email: 'Ernestoplaceholder@mail.com',
			website: 'www.Eplacehold.com',
			about:
				'Bacon ipsum dolor amet corned beef beef burgdoggen bacon bresaola kielbasa andouille capicola pastrami flank. Andouille capicola boudin biltong drumstick, sirloin meatball hamburger chicken ham hock flank porchetta. Fatback ball tip ham, pig filet mignon meatball alcatra jerky tri-tip meatloaf beef.',
			education: [
				{
					place: 'Harvard university',
					period: '1998 - 2001',
					certificate: 'Graduate Certificate in Front-End Web Development',
				},

				{
					place: 'Seattle university',
					period: '2002 - 2003',
					certificate: 'Graduate Certificate in Software Engineering',
				},
			],
			experience: [
				{
					year: '2004',
					company: 'Expedia Group',
					position: 'Web designer',
					functions: [
						'Planning site designs, functionality and navigation along with audience funnels and data capture points.',
						'Building wireframes & prototypes which were then turned into functional and responsive digital products',
						null,
						null,
					],
				},

				{
					year: '2009',
					company: 'Freelance Web designer',
					position: 'Web designer',
					functions: [
						'Designed an ecommerce webapp to sell baseball hats.',
						'Created a mobile website for a free online video game',
						'Designed custom graphics for a local print shop',
						null,
					],
				},

				{
					year: '2012',
					company: 'Amphimia Global, inc.',
					position: 'Web designer',
					functions: [
						'Lead UI/UX website designer for a fast-paced design firm. Created an average of four minor websites or one major website per month',
						'Created custom graphics sets for clients, with 99% client satisfaction scores',
						null,
						null,
					],
				},
			],
			functions: [],

			skills: [
				{
					skill: 'HTML5',
					skillNum: '85',
				},
				{
					skill: 'CSS',
					skillNum: '65',
				},
				{
					skill: 'ES6',
					skillNum: '90',
				},
				{
					skill: 'Debugging',
					skillNum: '35',
				},
				{
					skill: 'GIT',
					skillNum: '98',
				},
			],
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleEducation = this.handleEducation.bind(this);
		this.handleExperience = this.handleExperience.bind(this);
		this.handleSkills = this.handleSkills.bind(this);
		this.reset = this.reset.bind(this);
	}

	handleChange(e) {
		const value = e.target.value;
		this.setState({
			[e.target.id]: value,
		});
	}

	handleEducation(e) {
		e.preventDefault();
		const { place, period, certificate } = this.state;

		const education = {
			place: place,
			period: period,
			certificate: certificate,
		};

		if (place && period && certificate) {
			this.setState({
				education: this.state.education.concat(education),
				place: '',
				period: '',
				certificate: '',
			});
		}
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

		if (year && company && position && function1) {
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
	}

	handleSkills(e) {
		e.preventDefault();
		const { skill, skillNum } = this.state;
		const skills = { skill: skill, skillNum: skillNum };

		if (skill && skillNum) {
			this.setState({
				skills: this.state.skills.concat(skills),
				skill: '',
				skillNum: '',
			});
		}
	}

	reset(e) {
		e.preventDefault();

		this.setState({
			fullName: '',
			occupation: '',
			phone: '',
			phone2: '',
			email: '',
			website: '',
			about: '',
			education: [],
			experience: [],
			functions: [],
			skills: [],
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
			skills,
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
										textarea="true"
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
						<Section
							title="Skills"
							content={
								<div>
									<SkillForm
										handler={this.handleChange}
										clickHandler={this.handleSkills}
										skillValue={this.state.skill}
										skillNumValue={this.state.skillNum}
									/>
								</div>
							}
						/>
						<Section
							title="Actions"
							content={
								<div className="form__actions">
									<ReactToPrint
										trigger={() => <button>Print</button>}
										content={() => this.componentRef}
									/>
									<button onClick={this.reset}>Reset</button>
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
					skills={skills}
					ref={(el) => (this.componentRef = el)}
				/>
			</div>
		);
	}
}
export default App;
