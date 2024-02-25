import React from 'react';
import classes from "./Button.module.scss"

const Button = (props) => {
    return (
        <button
            type="submit"
            className={classes.btnRegister}
        >
            {props.children}
        </button>
    );
};

export default Button;