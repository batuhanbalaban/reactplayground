import React from 'react';
import './Person.css'

const person = (props) =>{
    return (
        <div className="Person">
            <p onClick={props.myfunc}>I'm {props.name} I am {props.age} years old :)</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChanged} value={props.name}/>
        </div>
    
    )
};

export default person;