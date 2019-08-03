import React,{useEffect} from 'react';
import classes from './Cockpit.css';

const cocpit = (props) => {

//this event will be fired every dom getDerivedStateFromProps and componentDidUpdate
useEffect(()=>{
  // console.log('Cockpit.js - > useEffect');
  // setTimeout(()=>{
  //   alert('Saved data to cloud!');
  // },1000);
});

//this event will be fired whenever props.persons changed
  useEffect(()=>{
    // console.log('Cockpit.js - > useEffect');
    // setTimeout(()=>{
    //   alert('Saved data to cloud!');
    // },1000);
  },[props.persons]);


//this event will be fired only once when dom created
useEffect(()=>{
  // console.log('Cockpit.js - > useEffect');
  // setTimeout(()=>{
  //   alert('Saved data to cloud!');
  // },1000);
},[]);


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