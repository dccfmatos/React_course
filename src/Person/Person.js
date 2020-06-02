import React from 'react';
import './Person.css';
import Radium from 'radium';

//create a function:
// same as funtion() {}

const person = (props) => {
    const myStyle = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
            {/*need o import {StyleRoot} */}
    return (
        <div className="Person" style= {myStyle}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Radium(person);