import React, { Component } from 'react';
import classes from './App.css';
import Persons from  '../components/Persons/Persons';
import Cockpit from  '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';



class App extends Component {

  constructor(props){
    super(props);
    console.log('app.js constructor');
    this.state = {
      persons:[
        {id:"1",name:"Batu", age:23},
        {id:"2",name:"gulcn", age:24},
        {id:"3",name:"dilek", age:25},
        {id:"4",name:"kemal", age:26},
        {id:"5",name:"ahmet", age:27}
      ],
      otherState :"bla bla",
      showPersons : false,
      showCockpit : true,
      changeCounter : 0,
      authenticated : false
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
  this.setState((prevState, props) => {return{persons:persons,changeCounter : prevState.changeCounter +1 };});
  //this.setState({persons:persons})
}

loginHandler = () => {
  this.setState({authenticated:true});
};
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
                  changed = {this.nameChangesHandler}
                  isAuthenticated = {this.state.authenticated}/>;
      
    }



    return (
      <Aux classes={classes.App}>
        <p>{this.props.appName}</p>
        <button onClick = {()=>{this.setState({showCockpit:!this.state.showCockpit})}}>Remove Cockpit!</button>
        <AuthContext.Provider value={{authenticated:this.state.authenticated,login : this.loginHandler}}>
          {this.state.showCockpit ? <Cockpit 
          showPersons = {this.state.showPersons} 
          personsLength = {this.state.persons.length}
          clicked = {this.togglePersonsHandler}
          /> :null }

          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App,classes.App);
