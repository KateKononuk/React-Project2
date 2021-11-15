import React from 'react';
import classes from './Button.module.css'


const Button = ({children, ...props}) => {
    const styles = {
        par: {
            padding: '5px',
            backgroundColor: 'wheat',
            color: 'black',
            borderRadius: '6px',
            visibility: 'hidden',
        }
    }
    
    return (
        <div className='d-flex flex-row justify-content-between'>
        <p style={styles.par}>Tweet cant be larger than 140 chars</p>
        <button className={classes.myBtn}>
            {children}
        </button>
        </div>
    );
};

export default Button;