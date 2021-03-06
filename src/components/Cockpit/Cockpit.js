import React, {useEffect } from 'react';
import styles from './Cockpit.module.css';   

const cockpit = (props) => {
    
    useEffect(() => {
        //executes in every render cycle
        console.log('[Cockpit.js] useEffect');
        //http request
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
    });

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = styles.Red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(styles.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(styles.bold);
    }

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );

};

export default cockpit;