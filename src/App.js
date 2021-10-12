import React from 'react';
import Cv from './Components/Cv';
import FormInput from './Components/FormInput';
import Section from './Components/Section';
import './styles/app.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			fullName: '',
			occupation: '',
			phone: '',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const value = e.target.value;
		this.setState({
			[e.target.id]: value,
		});
	}

	render() {
		const { fullName, occupation, phone, phone2, email, website, about } =
			this.state;

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
				</form>

				<Cv
					fullName={fullName}
					occupation={occupation}
					phone={phone}
					phone2={phone2}
					email={email}
					website={website}
					about={about}
				/>
			</div>
		);
	}
}
export default App;
