import React,{Component} from 'react';
import Person from  './Person/Person'

class Persons extends Component{

  // static getDerivedStateFromProps(props,state){
  //   console.log('Persons.js getDerivedStateFromProps');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('Persons.js shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, presState){
    console.log('Persons.js getSnapshotBeforeUpdate');
    return {message:'Snapshot!'}
  }
  componentDidUpdate(prevProps, presState, snapshot){
    console.log('Persons.js componentDidUpdate');
    console.log(snapshot);
  }
  componentDidMount(){
    console.log('Persons.js componentDidMount');
  }
  componentWillUnmount(){
    console.log('Persons.js componentWillUnmount');
    //you can do cleanup work here
  }
  render(){
    console.log('Persons.js rendering ...');
    return this.props.persons.map((person,index) => {
        return ( <Person 
        name={person.name} 
        age={person.age} 
        click={() => this.props.clicked(index)}
        key={person.id}
        changed={(event) => this.props.changed(event,person.id)} /> );
      });
      
  }
}

export default Persons;