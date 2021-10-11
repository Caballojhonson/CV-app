import React from 'react';
import Contact from './Components/Contact';
import EducationItem from './Components/EducationItem';
import ExperienceItem from './Components/ExperienceItem';
import Name from './Components/Name';
import Section from './Components/Section';
import SkillBars from './Components/SkillBars';
import './styles/App.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {};
	}

	experienceItems() {
		console.log('Experience item method');
	}
	render() {
		return (
			<div className="cv">
				<div className="leftColumn">
					<Name name="ABIGAIL STANFORD" profession="GRAPHIC DESIGNER" />
					<Section 
						title="CONTACT"
						content={
							<Contact 
								phone="(04) 290 2093"
								phone2="+76 209 1092 2092"
								email="abigailstanford@email.com"
								website="www.abigailstanford.com"
							/>
						}
					/>
				</div>

				<div className="rightColumn">
					<Section title="ABOUT ME" content={<p>Is the aspect ratio used by both A and B series. B series (B1, B2, B3…) is less common. It is bigger than A (B4 is 25.0 x 35.3 cm).

The length of the diagonal of an a4 paper is almost 36.3cm. This is 14.3 inches and we can say that one sheet is more or less the same as an 14″ laptop. But the ratio is nearest to 4:3 than to 16:9. </p>} />

					<Section
						title="EDUCATION"
						content={
							<EducationItem
								place="Harvard University"
								period="2021 - 2023"
								course="Brain damaged monkey surveys"
							/>
						}
					/>

					<Section
						title="EXPERIENCE"
						content={
							<ExperienceItem
								year="2023"
								employer="GOODYEAR"
								position="JUNIOR BALLSUCKER OF THE GOODYEAR"
								jobs={
									<div>
										<li>Sucked bob's balls</li>
										<li>Sucked Michael's sweaty balls</li>
										<li>
											Sometimes charged with licking Mr. Jose's balls. He was
											the janitor
										</li>
									</div>
								}
							/>
						}
					/>

					<Section
						title="SKILLS"
						content={<SkillBars skill="Ballsucking" skillPercent="80%" />}
					/>
				</div>
			</div>
		);
	}
}
export default App;
