import React from 'react';
import ErrorBoundry from '../ErrorBoundary/ErrorBoundary';
import Person from  './Person/Person'

const persons = (props) =>(

    props.persons.map((person,index) => {
        return <ErrorBoundry key={person.id}> <Person 
        name={person.name} 
        age={person.age} 
        click={() => props.clicked(index)}
        changed={(event) => props.changed(event,person.id)} /> </ErrorBoundry>
      })

);

export default persons;