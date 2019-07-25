import React, { Component } from 'react';
import './App.css';
import Person from  './Person/Person'

class App extends Component {

  state = {
    persons:[
      {name:"Batu", age:"23"},
      {name:"gulcn", age:"24"},
      {name:"dilek", age:"25"},
      {name:"kemal", age:"26"},
      {name:"ahmet", age:"27"}
    ],
    otherState :"BlaBla",
    showPersons : false
  }

nameChanhedHandler = (event) => {
  //console.log("was called!");
  // DON'T DO THIS !!!! this.state.persons[0].name = "Nahutab";
  this.setState({
    persons:[
      {name:this.state.persons[0].name, age:"33"},
      {name:this.state.persons[1].name, age:"34"},
      {name:this.state.persons[2].name, age:"35"},
      {name:event.target.value, age:"36"},
      {name:this.state.persons[4].name, age:"37"}
    ]
  })
}
deletePersonHandler = (index) =>{
  const persons = this.state.persons;
  persons.splice(index,1);
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
            return <Person name={person.name} age={person.age} click={this.deletePersonHandler.bind(this,index)} />
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
