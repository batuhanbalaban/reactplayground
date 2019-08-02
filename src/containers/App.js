import React, { Component } from 'react';
import classes from './App.css';
import Persons from  '../components/Persons/Persons'
import Cockpit from  '../components/Cockpit/Cockpit'

class App extends Component {

  constructor(props){
    super(props);
    console.log('app.js constructor');
    this.state = {
      persons:[
        {id:"1",name:"Batu", age:"23"},
        {id:"2",name:"gulcn", age:"24"},
        {id:"3",name:"dilek", age:"25"},
        {id:"4",name:"kemal", age:"26"},
        {id:"5",name:"ahmet", age:"27"}
      ],
      otherState :"bla bla",
      showPersons : false
    }
  }
  
  static getDerivedStateFromProps(props,state){
    console.log('app.js getDerivedStateFromProps',props);
    return state;
  }

  componentDidMount(){
    console.log('app.js componentDidMount');
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
    console.log('app.js render');
    let persons = null;
    if(this.state.showPersons){
      persons = <Persons 
                  persons = {this.state.persons}  
                  clicked = {this.deletePersonHandler} 
                  changed = {this.nameChangesHandler}/>;
      
    }



    return (
      <div className={classes.App}>
        <p>{this.props.appName}</p>
        <Cockpit 
        showPersons = {this.state.showPersons} 
        persons = {this.state.persons}
        clicked = {this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
