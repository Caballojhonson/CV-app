import React from 'react'

function ExperienceItem(props) {
    return(
        <div>
            <div>
                <h3>{props.year}</h3>
            </div>
            <div>
                <h3>{props.employer}</h3>
                <h3>{props.position}</h3>
                <ul>{props.jobs}</ul>
            </div>
        </div>
    )
}

export default ExperienceItem