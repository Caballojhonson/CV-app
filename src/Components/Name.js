import React from 'react'
import '../styles/name.css'

function Name(props) {
    return(
        <div className="nameSection">
            <h1 className="name">{props.name}</h1>
            <h2 className="profession">{props.profession}</h2>
        </div>
    )
}

export default Name