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

switchNameHandler = () => {
  //console.log("was called!");
  // DON'T DO THIS !!!! this.state.persons[0].name = "Nahutab";
  this.setState({
    persons:[
      {name:"Nahutab", age:"33"},
      {name:"Niçlug", age:"34"},
      {name:"kelid", age:"35"},
      {name:"Lamek", age:"36"},
      {name:"Temha", age:"37"}
    ]
  })
}

switchNameHandler2 = (name) => {
  //console.log("was called!");
  // DON'T DO THIS !!!! this.state.persons[0].name = "Nahutab";
  this.setState({
    persons:[
      {name:name, age:"33"},
      {name:this.state.persons[1].name, age:"34"},
      {name:this.state.persons[2].name, age:"35"},
      {name:this.state.persons[3].name, age:"36"},
      {name:this.state.persons[4].name, age:"37"}
    ]
  })
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

    return (
      <div className="App">
        <h1>Hi, i am your daddy!</h1>
        <p>{this.state.otherState}</p>
        <button style={mystyle} onClick={this.togglePersonsHandler}>Switch name</button>
        {
          this.state.showPersons ? 
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} myfunc={this.switchNameHandler} />
          <Person  name={this.state.persons[1].name} age={this.state.persons[1].age} myfunc={this.switchNameHandler2.bind(this,"SomeName")} />
          <Person  name={this.state.persons[2].name} age={this.state.persons[2].age} myfunc={ () =>this.switchNameHandler2("EvenBetter")} />
          <Person  name={this.state.persons[3].name} age={this.state.persons[3].age} myfunc={this.switchNameHandler} nameChanged={this.nameChanhedHandler}>My Hobbies:Motorbike</Person>
          <Person  name={this.state.persons[4].name} age={this.state.persons[4].age} myfunc={this.switchNameHandler}/>
        </div> : null
        }
      </div>
    );
  }
}

export default App;
