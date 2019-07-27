import React from 'react';
import Radium, {StyleRoot} from 'radium'
import './Person.css'

const person = (props) =>{

const mystyle = {
    '@media(min-width: 500px)':{
        width:'450px'
    }

};


    return (
        <StyleRoot>
            <div className="Person" style ={mystyle}  >
                <p onClick={props.click}>I'm {props.name} I am {props.age} years old :)</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name}/>
            </div>
        </StyleRoot>
    )
};

export default person;