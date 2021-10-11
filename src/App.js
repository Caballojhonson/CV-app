import React from 'react';
import EducationItem from './Components/EducationItem';
import ExperienceItem from './Components/ExperienceItem';
import Section from './Components/Section';
import SkillBars from './Components/SkillBars';

class App extends React.Component {
	constructor() {
		super();

		this.state = {

    };
	}

	experienceItems() {
		console.log('Experience item method');
	}
	render() {
		return (
			<div>

				<Section title="ABOUT ME" content={<p>Lorem Ipsum </p>} />
				
        <Section title="EDUCATION" content={
          <EducationItem place="Harvard University" period="2021 - 2023" course="Brain damaged monkey surveys" />} />
        
        <Section title="EXPERIENCE" content={
          <ExperienceItem year="2023" employer="GOODYEAR" position="JUNIOR BALLSUCKER OF THE GOODYEAR" jobs={
            <div>
            <li>Sucked bob's balls</li>
            <li>Sucked Michael's sweaty balls</li>
            <li>Sometimes charged with licking Mr. Jose's balls. He was the janitor</li>
            </div>
          } />
        } />

        <Section title="SKILLS" content={
          <SkillBars skill="Ballsucking" skillPercent="80%" />
        } />

      </div>
		);
	}
}
export default App;
