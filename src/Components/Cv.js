import React from 'react';
import Contact from './Contact';
import EducationItem from './EducationItem';
import ExperienceItem from './ExperienceItem';
import Name from './Name';
import Section from './Section';
import SkillBars from './SkillBars';
import '../styles/cv.css';

class Cv extends React.Component {
	constructor() {
		super();

		this.state = {};
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
		} = this.props;

		return (
			<div className="cv">
				<div className="leftColumn">
					<Name name={fullName} profession={occupation} />
					<Section
						title="CONTACT"
						content={
							<Contact
								phone={phone}
								phone2={phone2}
								email={email}
								website={website}
							/>
						}
					/>
				</div>

				<div className="rightColumn">
					<Section title="ABOUT ME" content={<p>{about}</p>} />

					<Section
						title="EDUCATION"
						content={education.map((item) => {
							return (
								<EducationItem
									place={item.place.toUpperCase()}
									period={item.period}
									course={item.certificate}
								/>
							);
						})}
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

export default Cv;
