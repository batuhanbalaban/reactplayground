import React, { Component } from 'react';
import './App.css';
import Person from  './Person/Person'

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
  const personIndex =this.state.persons.findIndex(p => {return p.id ===id;})
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

    const mystyle = {
      backgroundColor:'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };


    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
            name={person.name} 
            age={person.age} 
            click={this.deletePersonHandler.bind(this,index)}
            key={person.id}
            changed={(event) => this.nameChangesHandler(event,person.id)} />
          })}
      </div> 
      );
    }
    return (
      <div className="App">
        <h1>Hi, i am your daddy!</h1>
        <p>{this.state.otherState}</p>
        <button style={mystyle} onClick={this.togglePersonsHandler}>Toggle Person</button>
        {persons}
      </div>
    );
  }
}

export default App;
