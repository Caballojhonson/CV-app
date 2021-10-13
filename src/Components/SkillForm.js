import React from 'react'
import FormInput from './FormInput'

function SkillForm(props) {
    return(
        <div>
            <FormInput value={props.skillValue} label="Skill" id='skill' handler={props.handler} />
            <FormInput value={props.skillNumValue} label="Skill 0-100" id='skillNum' handler={props.handler} />
            <button onClick={props.clickHandler}>Add</button>
        </div>
    )
}

export default SkillForm