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
			experience,
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
						content={experience.map((item) => {
							return (
								<ExperienceItem
									year={item.year}
									employer={item.company.toUpperCase()}
									position={item.position.toUpperCase()}
									jobs={item.functions.map(func => {
                                         if(!func) return null
                                         else return <li>{func}</li>
                                       
                                        
                                    })}
								/>
							);
						})}
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
