import React, { Component } from 'react';
import classes from './App.css';
import Person from  './Person/Person'
import ErrorBoundry from './ErrorBoundary/ErrorBoundary';
class App extends Component {

  state = {
    persons:[
      {id:"1",name:"Batu", age:"23"},
      {id:"2",name:"gulcn", age:"24"},
      {id:"3",name:"dilek", age:"25"},
      {id:"4",name:"kemal", age:"26"},
      {id:"5",name:"ahmet", age:"27"}
    ],
    otherState :"BlaBla",
    showPersons : false
  }

deletePersonHandler = (index) =>{
  //const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(index,1);
  this.setState({persons:persons})
}

nameChangesHandler = (event, id) =>{
  //const persons = this.state.persons.slice();
  const personIndex =this.state.persons.findIndex(p => 
    {return p.id ===id;}
    )
  const person ={
    ...this.state.persons[personIndex]
  };

  //const person = Object.assign({},this.state.persons[personIndex]);

  person.name = event.target.value;


  const persons = [...this.state.persons];
  persons[personIndex] =  person;

  this.setState({persons:persons})
}

togglePersonsHandler = () =>{
const doesShow = this.state.showPersons;
this.setState({showPersons:!doesShow});
}
  render() {
    let btnClass ='';
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <ErrorBoundry key={person.id}> <Person 
            name={person.name} 
            age={person.age} 
            click={this.deletePersonHandler.bind(this,index)}
            changed={(event) => this.nameChangesHandler(event,person.id)} /> </ErrorBoundry>
          })}
      </div> 
      );
      btnClass = classes.Red;
    }



    let assignedClasses = [];


    if(this.state.persons.length<=2)
    {
      assignedClasses.push(classes.red); //assignedClasses = ['red'];
    }
    if(this.state.persons.length<=1)
    {
      assignedClasses.push(classes.bold); //assignedClasses = ['red','bold'];
    }
    return (
      <div className={classes.App}>
        <h1>Hi, i am your daddy!</h1>
        <p className={assignedClasses.join(' ')}>{this.state.otherState}</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Person</button>
        {persons}
      </div>
    );
  }
}

export default App;
