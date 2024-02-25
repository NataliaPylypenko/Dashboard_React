import React from 'react';
import {useHistory} from "react-router-dom/cjs/react-router-dom.min";
import Button from "../button/Button";
import classes from "./FormUser.module.scss";

const FormUser = ({formData, handleSubmit, handleChange, nameButton}) => {
    const history = useHistory();

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label>Username:</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
                <label>City:</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} />
            </div>
            <div>
                <label>Street:</label>
                <input type="text" name="street" value={formData.street} onChange={handleChange} />
            </div>

            <button className={classes.btn + ' ' + classes.btnCancel} onClick={() => history.push('/')}>Cancel</button>
            <Button>{nameButton}</Button>
        </form>
    );
};

export default FormUser;