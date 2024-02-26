import React from 'react';
import classes from "./Button.module.scss"

const Button = ({type, handleClick, children}) => {
    return (
        <button
            type={type || 'button'}
            className={type ? `${classes.btn} ${classes.btnRegister}` : `${classes.btn} ${classes.btnCancel}`}
            onClick={!type ? handleClick : undefined}
        >
            {children}
        </button>
    );
};

export default Button;