import React from 'react';
import classes from './Cockpit.css';

const cocpit = (props) => {

    let btnClass ='';
    if(props.showPersons){

        btnClass = classes.Red;
      }
    
    
    let assignedClasses = [];


    if(props.persons.length<=2)
    {
      assignedClasses.push(classes.red); //assignedClasses = ['red'];
    }
    if(props.persons.length<=1)
    {
      assignedClasses.push(classes.bold); //assignedClasses = ['red','bold'];
    }




    return(
        <div className = {classes.Cockpit}>
            <h1>Hi, i am your daddy!</h1>
            <p className={assignedClasses.join(' ')}>Be Careful!!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Person</button>
        </div>
    );
}

export default cocpit;