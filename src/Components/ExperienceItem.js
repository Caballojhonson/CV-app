import React from 'react'
import '../styles/experienceItem.css'

function ExperienceItem(props) {
    return(
        <div className="experienceContainer">
            <div className="yearCol">
                <h3>{props.year}</h3>
            </div>
            <div>
                <h3 className="employer">{props.employer}</h3>
                <h4 className="position">{props.position}</h4>
                <ul className="list">{props.jobs}</ul>
            </div>
        </div>
    )
}

export default ExperienceItem 