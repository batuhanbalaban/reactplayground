import React,{useEffect, useRef} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cocpit = (props) => {

  const toggleBtnRef = useRef(null);

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
  console.log('Cockpit.js - > useEffect');
  // const timer = setTimeout(()=>{
  //   alert('Saved data to cloud!');
  // },1000);
  toggleBtnRef.current.click();

  return () => {
    //clearTimeout(timer);
    console.log('Cockpit.js - > useEffect - cleanup work')
  };

},[]);


    let btnClass ='';
    if(props.showPersons){

        btnClass = classes.Red;
      }
    
    
    let assignedClasses = [];


    if(props.personsLength<=2)
    {
      assignedClasses.push(classes.red); //assignedClasses = ['red'];
    }
    if(props.personsLength<=1)
    {
      assignedClasses.push(classes.bold); //assignedClasses = ['red','bold'];
    }




    return(
        <div className = {classes.Cockpit}>
            <h1>Hi, i am your daddy!</h1>
            <p className={assignedClasses.join(' ')}>Be Careful!!</p>
            <button 
              ref={toggleBtnRef}
              className={btnClass} 
              onClick={props.clicked}>
              Toggle Person
              </button>
              <AuthContext.Consumer>
                    {(context) =>
                        <button onClick={context.login}>Log in</button>
                    }
                </AuthContext.Consumer>
              
        </div>
    );
}

export default React.memo(cocpit);