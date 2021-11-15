import React from 'react';
import classes from './Input.module.css'

const Input = ((props) => {
    return (
        <textarea  className={classes.myInput} {...props}/>
    );
});

export default Input;