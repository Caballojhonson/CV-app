import React from 'react';
import '../styles/section.css'

function Section(props) {
    return (
        <div className="mainContainer">
            <h1 className="sectionTitle" >{props.title}</h1>
            <div className="contentContainer" >
                {props.content}
            </div>
        </div>
    )
}

export default Section