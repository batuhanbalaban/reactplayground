import React, {Component, Fragment} from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount(){
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render(){

        console.log('Person.js rendering ...');
        return (
            <Fragment>
                <AuthContext.Consumer>
                    {(context) =>
                        context.authenticated ? <p>Authenticated</p> :  <p>Please Log in!</p>
                    }
                </AuthContext.Consumer>
                <p key="i1" onClick={this.props.click}>I'm {this.props.name} I am {this.props.age} years old :)</p>
                <p key="i2">{this.props.children}</p>
                <input 
                    //ref={(inputEl)=>{this.inputElement = inputEl;}}
                    ref={this.inputElementRef}
                    key="i3" 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Fragment>
        );
    }

}

Person.propTypes = {
    click:PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    changed:PropTypes.func
};

export default withClass(Person, classes.Person);