import React from "react";

function Contact(props) {
    return(
        <div className="contact">
            <p>{props.phone}</p>
            <p>{props.phone2}</p>
            <p>{props.email}</p>
            <p>{props.website}</p>
        </div>
    )
}

export default Contact
