import React, { Component } from 'react';
import Person from './Person/Person';
import styles from './App.module.css';
//React V2.0 +, just have to import this "styles" and name de css file
//[name].module.css
//then call styles.[class name on css] to use it

class App extends Component {
  state = {
    persons: [
      { id: '111', name: 'Max', age: 28 },
      { id: '222', name: 'Manu', age: 29 },
      { id: '333', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    

    this.setState( {persons: persons} );
  }


  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  } 



  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  } 
  
  

  render () {
    
    let persons = null;
    let btnClass = '';

    if ( this.state.showPersons ) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, persons.id)}
            />
        })}
         
        </div>
      );

      //change styles dinamically
      btnClass = styles.Red;//btnClass will be an array with the btnClass and the Red class
    }

    //variable assignedClasses is just a String joined with an empty space ('red bold')
    //---->>let assignedClasses = ['red', 'bold'].join(' ');


    // ------
    // to use in paragraph in return()
    //red and bold are the classes defined in .css
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(styles.red); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(styles.bold); //classes = ['red', 'bold']
    }


    return (
      <div className={styles.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        {/* assignedClasses is just an array, we need to pass a string: classes.join(' ')*/}
        <button className={btnClass} //join all the classes in ther (.button)
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  
  }
}

export default App;
//higher order component 
//component wrapping our component injecting functions